import React from "react";

import Image from "../../assets/banner.jpeg";

import classes from "./Header.module.css";

const Banner = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={Image} alt="Eat to your full" />;
    </div>
  );
};

export default Banner;
