import React from "react";
import { Link } from "react-router-dom";

const Item = ({productos}) => {
    return (
        <div className="col-md-4 my-4">
            <Link to={"item/" + productos.id} className="text-dark text-decoration-none">
                <div className="card text-center">
                    <img src={productos.image} className="card-img-top" height={346} alt={productos.name}/>
                        <div className="card-body">
                            <p className="card-text">{productos.name}</p>
                            <p className="card-text"><b>${productos.price}</b></p>
                        </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;