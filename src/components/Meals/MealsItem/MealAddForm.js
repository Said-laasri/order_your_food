import React, { useRef, useState } from "react";

import Input from "../../UI/Input";

import classes from "./MealAddForm.module.css";

const MealAddform = (props) => {
  const { onAddToCart } = props;
  const amountInputRef = useRef();
  const [amoutIsValid, setAmountIsValid] = useState(true);
   
  const submitHundler = (e) => {
    e.preventDefault();

    const entredAmout = amountInputRef.current.value;
    const entredAmoutNumber = +entredAmout;
   
    if (
      entredAmout.trim().length === 0 ||
      entredAmoutNumber < 1 ||
      entredAmoutNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(entredAmoutNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHundler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "6",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amoutIsValid && <p>Please enter a Valid number!</p>}
    </form>
  );
};

export default MealAddform;
