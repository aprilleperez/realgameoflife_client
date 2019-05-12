import React from "react";
import "./button.css";


function Button(props) {

  // let className = "button " + props.buttonType;

  return (
      <button className="appButton" to={props.to} value={props.value}>{props.text}</button> 
      // className={className}
  )
}

export default Button;