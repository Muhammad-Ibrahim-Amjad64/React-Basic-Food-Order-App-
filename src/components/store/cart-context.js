import React from "react";
import { createContext } from "react";

const cartContext = createContext({
    cartItems:[],
    totalAmount:0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: ()=>{}

})


export default cartContext;