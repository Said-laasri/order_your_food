import React from "react";

import DUMMY_MEALS from "./DummyMeals";
import MealsItem from "./MealsItem/MealsItem";

import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const AvailavleMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailavleMeals;
