import React from "react";
import Array from "../utils/products.json";
import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        const prom = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Array.find(item => item.id === parseInt(id)));
            },2000);
        });

        prom.then((data) => {
            setItem(data);
        })
        
    },[id])

    return (
        <div className="container">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;