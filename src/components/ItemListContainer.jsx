import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Array from "../utils/products.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = ({greeting}) => {

    const [prod, setProd] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const prom = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? Array.filter(item => item.category === id) : Array);
            },2000);
        });

        prom.then((data) => {
            setProd(data);
        })
        
    },[id])

    return(
        <div className="container">
            <div className="row">  
                <ItemList prod={prod}/>
            </div>
        </div>
    )
}

export default ItemListContainer; 