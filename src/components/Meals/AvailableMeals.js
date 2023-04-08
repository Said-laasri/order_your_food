import React, { useEffect, useState } from "react";
import MealsItem from "./MealsItem/MealsItem";
import Spinner from "../UI/Spinner";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://order-food-1f7c5-default-rtdb.firebaseio.com/Meals.json")
        .then((response) => response.json())
        .then((data) => {
          const loadedMeals = [];
          for (const key in data) {
            loadedMeals.push({
              id: key,
              name: data[key].name,
              description: data[key].description,
              price: data[key].price,
              image: data[key].image,
            });
          }
          setMeals(loadedMeals);
          setIsLoading(false);
        })
        .catch((error) => {
          // handle errors here
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  const mealsList = meals.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && (
          <div className={classes.center}>
            <Spinner />
          </div>
        )}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
