import React, { useContext } from "react";

import MealAddform from "./MealAddForm";
import CartContext from "../../../store/cart-context";

import classes from "./MealsItem.module.css";

const MealsItem = (props) => {
  const { id, name, price, description} = props;
  const cartConx = useContext(CartContext);
  const priceItem = `$${price.toFixed(2)}`;

  const onAddToCartHundler = amount => {
    cartConx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li>
      <div className={classes.meal}>
        <div>
          <h3>{name}</h3>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>{priceItem}</div>
        </div>
        <div>
          <MealAddform onAddToCart={onAddToCartHundler} />
        </div>
      </div>
    </li>
  );
};

export default MealsItem;
