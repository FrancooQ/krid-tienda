import React, { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom";


const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    const [itemStock,setItemStock] = useState(stock);
    const [vendido,setVendido] = useState(false);

    const sumar = () => count < itemStock && setCount(count+1);
    const restar = () => count !== initial && setCount(count-1);

    const addToCart = (quantity) => {
        if(count <= itemStock) {
            setCount(initial);
            setItemStock(itemStock - quantity);
            setVendido(true);
            onAdd(quantity);
        }
    }

    useEffect (() => {
        setItemStock(stock);
    }, [stock])

    return (
        <div>
            <div className="col-md-12">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-dark" onClick={restar}>-</button>
                    <button type="button" className="btn btn-light">{count}</button>
                    <button type="button" className="btn btn-dark" onClick={sumar}>+</button>
                </div>
                {vendido ? <Link to={"/cart"} className="btn btn-success mx-2">Finalizar Compra</Link> : <button type="button" className="btn btn-success mx-2" onClick={() => {addToCart(count)}}><img src="/images/cart-plus.svg" alt="Agregar al carrito"/></button>}
            </div>
        </div>
    )
}

export default ItemCount;