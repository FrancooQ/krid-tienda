import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);
    
    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect(() => {
        setItemStock(item.stock);
    }, [item])


    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.image} alt={item.name} className="img-fluid"/>
            </div>
            <div className="col-md-4 offset-md-2">
                <h1>{item.logo}</h1>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{item.description}</p>
                <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/>
            </div>
        </div>
    )
}

export default ItemDetail;