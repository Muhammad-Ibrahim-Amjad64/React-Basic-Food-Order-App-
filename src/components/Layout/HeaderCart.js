import React, { useContext } from "react"
import styles from "./HeaderCart.module.css"
import CartIcon from "../Cart/CartIcon"
import cartContext from "../store/cart-context"
import { useState,useEffect } from "react"

const HeaderCart = props =>{

const [buttonBump,setButtonBump]= useState(false)
const ctx = useContext(cartContext)
const number = ctx.cartItems.reduce((accumulator,currentvalue)=>{
  return accumulator+currentvalue.amount
},0)

const {cartItems} = ctx

useEffect(()=>{
  setButtonBump(true)
  const timer = setTimeout(()=>{
    console.log("timer")
    setButtonBump(false)

    return (()=>{
      clearTimeout(timer)
    })

  },300)

},[cartItems])

    const buttonClasses = `${styles.button}  ${ buttonBump && styles.bump}`
    return(
     
        <>
         <button className={buttonClasses} onClick={props.showCart}>
      <span className={styles.icon}>
        <CartIcon /> 
      </span>
      <span>Your Cart</span>
      {/* <span className={styles.badge}>{ctx.cartItems.length}</span> */}
      <span className={styles.badge}>{number}</span>
    </button>
    
        </>
    )
}

export default HeaderCart