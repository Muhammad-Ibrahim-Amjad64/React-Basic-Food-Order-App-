import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const MealAmountRef = useRef()
  const [error,setError]= useState(false)


  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("yaha aya")
    const MealAmout = MealAmountRef.current.value 
    const NumberMealAmount = +MealAmout
    if (NumberMealAmount===0 || NumberMealAmount>5||NumberMealAmount<1) {
      setError(true)
      return;
      
    }
    setError(false);
    props.onAddToCart(NumberMealAmount); //We pass this because our new meal item does not require only amount so we will pass that into meal item to  further manage other properties of meal item ( so sending towards meal item )  
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input
        input={{
          id: "MealInput" + props.id,
          min: 1,
          max: 5,
          step: 1,
          type: "number",
          defaultValue: 1,
          
          
        }}
        ref={MealAmountRef}
        label="Amount"
      ></Input>
      <button>+ Add</button>
      {error &&<p>Invalid Amount Please try again bro </p>}
    </form>
  );
};

export default MealItemForm;
