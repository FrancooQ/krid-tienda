import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.image} alt={item.name} className="img-fluid"/>
            </div>
            <div className="col-md-4 offset-md-2">
                <h1>{item.logo}</h1>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <ItemCount stock={item.stock} initial={1}/>
            </div>
        </div>
    )
}

export default ItemDetail;