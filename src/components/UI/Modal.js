import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  const { hideCart } = props;
  return (
    <div onClick={hideCart} className={classes.backdrop}>
      {props.children}
    </div>
  );
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
  const { hideCart } = props;
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideCart={hideCart}>
          <ModalOverlay>{props.children}</ModalOverlay>
        </Backdrop>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
