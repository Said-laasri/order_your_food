import React from "react";

import Image from "../../assets/takeout-mc-main1-210407.webp";

import classes from "./Header.module.css";

const Banner = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={Image} alt="Eat to your full" />;
    </div>
  );
};

export default Banner;
