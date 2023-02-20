import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}>{props.children}</div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop><ModalOverlay>{props.children}</ModalOverlay></Backdrop>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
