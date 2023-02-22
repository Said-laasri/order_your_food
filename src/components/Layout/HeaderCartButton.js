import React, { useContext} from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const {showCart} = props;
    const cartCox = useContext(CartContext);

    const numCartItem = cartCox.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);


  return (
    <button onClick={showCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numCartItem}
      </span>
    </button>
  );
};

export default HeaderCartButton;
