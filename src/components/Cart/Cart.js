import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Spinner from "../../components/UI/Spinner";
import Checkout from "./Checkout";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartConx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const { hideCart } = props;

  const totalAmount = `$${cartConx.totalAmount.toFixed(2)}`;
  const hasItems = cartConx.items.length > 0;

  const AddToCartHundler = (item) => [cartConx.addItem({ ...item, amount: 1 })];

  const removeFromCarthundler = (id) => {
    cartConx.removeItem(id);
  };

  const submitOrderHandler = (userData) => {
    setIsSubmitting(true);
    setTimeout(async () => {
      await fetch(
        "https://orders-6d758-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            orderedItems: cartConx.items,
          }),
        }
      );
      setIsSubmitting(false);
    }, 3000);
    setDidSubmit(true);
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

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const modalCheckout = (
    <div className={classes.actions}>
      <button onClick={hideCart} className={classes["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cardModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={hideCart} />
      )}
      {!isCheckout && modalCheckout}
    </>
  );
  const isSubmittingModalContent = (
    <div className={classes.center}>
      <Spinner />
    </div>
  );
  const didSubmitModalContent = (
    <div>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button onClick={hideCart} className={classes.button}>
          Close
        </button>
      </div>
    </div>
  );
  return (
    <Modal>
      {!isSubmitting && !didSubmit && cardModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
