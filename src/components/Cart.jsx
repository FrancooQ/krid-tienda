import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, cartTotal, clear, removeItem, sumTotal} = useContext(CartContext);
    console.log(cart);
    if(cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">
                            No se encontraron productos en el carrito!
                        </div>
                        <Link to={"/"} className="btn btn-danger">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio Unitario</th>
                                <th scope="col">Precio Total</th>
                                <th scope="col"><Link onClick={clear} className="btn btn-danger"  title={"Vaciar Carrito"}>Vaciar Carrito</Link></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.image} alt={item.nombre} width={80}/></td>
                                        <td className="align-middle">{item.name}</td>
                                        <td className="align-middle">{item.quantity}</td>
                                        <td className="align-middle">${item.price}</td>
                                        <td className="align-middle">${item.quantity * item.price}</td>
                                        <td className="align-middle"><Link onClick={() => {removeItem(item.id)}}><img src={"/images/trash.svg"} title={"Eliminar producto"} alt={"Eliminar producto"} width={32}/></Link></td>
                                    </tr>                  
                                    ))
                            }
                            <tr>
                                <td colSpan={4} className="text-end">Total a pagar:</td>
                                <td>${sumTotal().toFixed(3)}</td>
                                <td><button className="btn btn-danger"  title={"Ir a la facturación"}>Ir a Facturación</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;