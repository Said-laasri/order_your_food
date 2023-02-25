import { Fragment } from "react";

import Banner from "./Banner";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css"

const Header = (props) => {
  const {showCart} = props;
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.title} >Delicious Meals</h1>
        <HeaderCartButton showCart={showCart} />
      </header>
      <Banner />
    </Fragment>
  );
};

export default Header;
