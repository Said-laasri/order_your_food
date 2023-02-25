import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartConx = useContext(CartContext);

  const { hideCart } = props;

  const totalAmount = `$${cartConx.totalAmount.toFixed(2)}`;
  const hasItems = cartConx.items.length > 0;

  const AddToCartHundler = (item) => [
    cartConx.addItem({ ...item, amount: totalAmount }),
  ];

  const removeFromCarthundler = (id) => {;
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartConx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={AddToCartHundler.bind(null, item)}
          onRemove={removeFromCarthundler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={hideCart} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
