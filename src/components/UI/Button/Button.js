import React from "react";
import classes from "./Button.css";
function button(props) {
  <button
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.chidlren}
  </button>;
}

export default Button;
