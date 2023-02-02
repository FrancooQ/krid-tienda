import React from "react";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import { useState } from "react";
import { addDoc, collection, getFirestore, doc} from "firebase/firestore";

const Checkout = () => {
    const {cart, sumTotal, clear} = useContext(CartContext);
    const [nombre,setNombre] = useState("");
    const [telefono,setTelefono] = useState("");
    const [email,setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    
    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre,phone:telefono,email:email},
            items: cart.map(item => ({id:item.id, title: item.name, price: item.price, quantity: item.quantity})),
            total: sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDay()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);           
            const generateOrder = doc(db, "orders", snapShot.id);
            //updateDoc(generateOrder, {total:order.total + 200})//Para sumar a la facturacion.
            clear();
        });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                <form>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre: </label>
                        <input type="text" className="form-control" aria-describedby="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="telefono" className="form-label">Telefono: </label>
                        <input type="number" className="form-control" aria-describedby="Ingrese su Teléfono" onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="text" className="form-control" aria-describedby="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <button type="button" className="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
                </form>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.image} alt={item.name} width={80}/></td>
                                        <td className="align-middle">{item.name}</td>
                                        <td className="align-middle">{item.quantity}</td>
                                        <td className="align-middle">${(item.quantity * item.price).toFixed(3)}</td>
                                    </tr>                  
                                    ))
                            }
                            <tr>
                                <td colSpan={3} className="text-end">Total a pagar:</td>
                                <td>${sumTotal().toFixed(3)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId !== "" ? <div className="alert alert-warning" role="alert">La orden generada es: <b>
                    {orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;