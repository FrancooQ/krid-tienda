import React from "react";
import Item from "./Item";


const ItemList = ({prod}) => {
    
    return (
        <div className="row">
            {
                prod.map(productos =><Item key={productos.id} productos={productos}/> )
            }
        </div>
    )
}

export default ItemList;