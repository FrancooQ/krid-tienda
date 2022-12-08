import React from "react";

const CardWidget = () => {
    return (
        <button type="button" className="btn btn-light position-relative">
            <img src="../images/cart.svg" alt="Carrito" width="30" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CardWidget;