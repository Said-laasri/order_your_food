import React from "react";

import MealAddform from "./MealAddForm";

import classes from "./MealsItem.module.css";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealAddform />
        </div>
      </div>
    </li>
  );
};

export default MealsItem;
