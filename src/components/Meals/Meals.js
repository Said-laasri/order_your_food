import { Fragment } from "react";

import AvailavleMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailavleMeals />
    </Fragment>
  );
};

export default Meals;
