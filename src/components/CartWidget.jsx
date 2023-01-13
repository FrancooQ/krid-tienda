import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";


const CardWidget = () => {
    const {cartTotal} = useContext(CartContext);



    return (
        <Link to={"/cart"} className="btn btn-light position-relative">
            <img src="/images/cart.svg" alt="Carrito" width="30" title={"Ir al carrito"} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link>
    )
}

export default CardWidget;