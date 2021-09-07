import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props,ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.Input.id}>{props.lable}</label>
      <input ref={ref} {...props.Input} />
    </div>
  );
});

export default Input;
