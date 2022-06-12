import React from "react";

function Button({ value, className, handleClick, style }) {
  return (
    <input
    className={className ? className : "button-primary"}
    type="button"
    value={value ? value : "click"}
    style={{...style}}
    ></input>
  );
}


export default Button;
