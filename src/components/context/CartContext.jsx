import React, {createContext} from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos= cart.findIndex(prod => prod.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (id) => {
        const product = cart.filter (prod => prod.id !== id);
        setCart([...product]);
    }

    const clear = () =>{
        setCart([]);
    }

    const cartTotal = () => {
        return cart.reduce((acum, item) => acum += item.quantity, 0);
    }

    const sumTotal = () => {
        return cart.reduce((acum, item) => acum += item.quantity * item.price, 0);
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear,cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;