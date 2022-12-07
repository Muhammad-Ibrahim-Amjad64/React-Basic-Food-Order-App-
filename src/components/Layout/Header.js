import React from "react"
import styles from "./Header.module.css"
import HeaderCart from "./HeaderCart"
import MealsImage from "../../assets/meals.jpg"

const Person = props =>{

    return(
<>
        <header className={styles.header}>
            <h1>Hamari Meals</h1>
            <HeaderCart showCart={props.onshowCart}/>
        </header>
         <div className={styles["main-image"]}>
         <img src={MealsImage} alt="Delicious Foods Nabiha" />
     </div>
</>
     
        
    )
}

export default Person