import { Fragment } from "react";

import Banner from "./Banner";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css"

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Delicious Meals</h1>
        <HeaderCartButton />
      </header>
      <Banner />
    </Fragment>
  );
};

export default Header;
