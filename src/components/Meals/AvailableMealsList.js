import React from "react";
import styles from "./AvailableMealsList.module.css";
import AvalibleMealsItem from "./AvailableMealsItem";
import Card from "../UI/Card";
import useHttp from "../../hooks/use-Http";
import { useEffect } from "react";
import { useState } from "react";

const AvalibleMeals = (props) => {
  const [meals, setMeals] = useState([]);

  const transformMeals = (meals) => {
    const loadedMeals = [];
    for (const key in meals) {
      loadedMeals.push({
        id: key,
        name: meals[key].name,
        description: meals[key].description,
        price: meals[key].price,
      });
    }

    setMeals(loadedMeals);
  };
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {

    
      fetchMeals(
        {
          url: "https://react-http-prectice-default-rtdb.firebaseio.com/meals.json",
        },
        transformMeals
      );
      

 
  }, [fetchMeals]);
  // const DUMMY_MEALS = [
  //   {
  //     id: "m1",
  //     name: "Sushi",
  //     description: "Finest fish and veggies",
  //     price: 22.99,
  //   },
  //   {
  //     id: "m2",
  //     name: "Schnitzel",
  //     description: "A german specialty!",
  //     price: 16.5,
  //   },
  //   {
  //     id: "m3",
  //     name: "Barbecue Burger",
  //     description: "American, raw, meaty",
  //     price: 12.99,
  //   },
  //   {
  //     id: "m4",
  //     name: "Green Bowl",
  //     description: "Healthy...and green...",
  //     price: 18.99,
  //   },
  // ];



  
const loading = (<section className={styles.loading}>
  <p>Loading meals.....</p>
  </section>)

const content = meals.map((meal) => {
      return (
        <ul>
          <AvalibleMealsItem
            name={meal.name}
            description={meal.description}
            price={meal.price}
            key={meal.id}
            id={meal.id}
          />
        </ul>
      );
    });

    if (error) {
      return(
        <section className={styles.error}>
          <p>{error}</p>
        </section>
      )    
  }
  

  return (
    // <Card>
    <>
    {isLoading?loading:
    <section className={styles.meals}>
      <Card>{content}</Card>
    </section>}
    </>
  );
};

export default AvalibleMeals;
