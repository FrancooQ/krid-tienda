import React from "react";
import { useState } from "react";

const ItemCount = ({initial, stock}) => {

    const [count, setCount] = useState(initial);

    const sumar = () => count < stock && setCount(count+1);
    const restar = () => count !== initial && setCount(count-1);
    const onAdd = () => {
        if(stock > 0){
            console.log("Agregaste "+ count +" productos al carrito");
        }else{
            console.log("No hay stock del producto solicitado.");
        }     
    }

    return (
        <div>
            <div className="col-md-12">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-dark" onClick={restar}>-</button>
                    <button type="button" className="btn btn-light">{count}</button>
                    <button type="button" className="btn btn-dark" onClick={sumar}>+</button>
                </div>
                <button type="button" className="btn btn-success mx-2" onClick={onAdd}><img src="../images/cart-plus.svg" alt="Agregar al carrito"/></button>
            </div>
        </div>
    )
}

export default ItemCount;