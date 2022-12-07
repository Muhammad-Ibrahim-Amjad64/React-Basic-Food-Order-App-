import React, { useState } from "react";
import { useReducer } from "react";
import cartContext from "./cart-context";

const defaultCartState = {
    cartItems : [],
    totalAmount : 0
}


// AAGAY BRHNAY SE PHALAY IS CHEEZ KE NOTES BNA :)
const CartReducer= (state,action)=>{

    if(action.type==="ADD-ITEM"){
        
        // if () {
            
        const totalAmount = state.totalAmount + (action.cartItem.price * action.cartItem.amount)
        // }
        const existingCartItemIndex=state.cartItems.findIndex((item)=>item.id===action.cartItem.id)

        const existingCartItem= state.cartItems[existingCartItemIndex]

        let updatedCartItems
        
        if (existingCartItem) {
        const updatedCartItem={
                ...existingCartItem,
                amount:existingCartItem.amount + action.cartItem.amount
            }
            updatedCartItems= [...state.cartItems]
            updatedCartItems[existingCartItemIndex]=updatedCartItem
        }
        else{

             updatedCartItems = state.cartItems.concat(action.cartItem)
        }

       return({
        cartItems : updatedCartItems,
        totalAmount : totalAmount
       }) 
        // const checker = state.cartItems.filter((citem)=>citem.id===action.item.id)
        // if (checker) {
            
            
        // }
        
    }
    if (action.type==="REMOVE-ITEM") {
               
        
        const existingCartItemIndex=state.cartItems.findIndex((item)=>item.id===action.id)
        
        const existingCartItem= state.cartItems[existingCartItemIndex]
        
        let updatedCartItems
        let updatedCartItem
        const totalAmount = state.totalAmount - (existingCartItem.price )
        
        if (existingCartItem) {
            if (existingCartItem.amount===1) {
                updatedCartItems = state.cartItems.filter((item)=>item.id!==existingCartItem.id)

                
            }else{

                 updatedCartItem={
                        ...existingCartItem,
                        amount:existingCartItem.amount - 1
                    }
                    updatedCartItems= [...state.cartItems]
                    updatedCartItems[existingCartItemIndex]=updatedCartItem
                }
        }
        // else{

        //      updatedCartItems = state.cartItems.concat(action.cartItem)
        // }

       return({
        cartItems : updatedCartItems,
        totalAmount : totalAmount
       }) 
        
    }

    if (action.type==='CLEAR') {
        return defaultCartState
        }

    return defaultCartState

}


const CartContextProvider = props => {
    // An alternative to useReducer 
    // const [cartItems, setCartItems]= useState([])
    // const [amount, setAmount]= useState(0)



    const [Cartstate,dispatchCartState]= useReducer(CartReducer,defaultCartState)
    
    const cartItemsAddHandler = (item)=>{
        
    
        console.log("idhar aa gya nabiha")
        dispatchCartState({type:'ADD-ITEM' , cartItem:item})
    }

    // const totalAmountHandler = ()=>{
    //     setAmount(58)
    // }

    const cartItemRemoveHandler = (id)=>{
        dispatchCartState({type:"REMOVE-ITEM",id:id})
        // setCartItems(prevItems=>{
        //     const updatedCartItems = prevItems.filter(item=>item.id!==id)
        //     return updatedCartItems
        // })

    }

    const emptyCartItemHandler = ()=>{
        dispatchCartState({type:"CLEAR"})

    }

    const contextOfCart = {
        cartItems: Cartstate.cartItems,
        totalAmount: Cartstate.totalAmount,
        addItem: cartItemsAddHandler,
        removeItem:cartItemRemoveHandler,
        clearCart: emptyCartItemHandler
      }

  return (
    <cartContext.Provider value={contextOfCart}>
        {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
