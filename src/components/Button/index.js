import React from "react";
import "./button.css";


function Button(props) {

  let className = "button " + props.buttonType;

  return (
      <button className={className}>{props.text}</button>
  )
}

export default Button;