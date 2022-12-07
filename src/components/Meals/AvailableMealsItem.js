
import React from "react"
import styles from "./AvailableMealsItem.module.css"
import MealItemForm from "./MealItemForm"
import cartContext from "../store/cart-context"
import { useContext } from "react"

const AvalibleMealsItem = props =>{
    const price = `$${props.price.toFixed(2)}`
    const ctx = useContext(cartContext)



    const onAddToCartHandler = (mealAmountnumber)=> {
      ctx.addItem({
        id:props.id,
        name:props.name,
        amount:mealAmountnumber,
        price:props.price

      })


    }
    
    return(
     
        <li className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={onAddToCartHandler} id={props.id}/>
        </div>

      </li>
    )
}

export default AvalibleMealsItem