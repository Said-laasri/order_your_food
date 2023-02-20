import React from "react";

import Input from "../../UI/Input";

import classes from "./MealAddForm.module.css";

const MealAddform = (props) => {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  );
};

export default MealAddform;
