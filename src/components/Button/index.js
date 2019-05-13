import React from "react";
import "./button.css";


function Button(props) {
  return (
    <div className="appBtnCtn">
      <button className="appButton" to={props.to} value={props.value} onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default Button;



// let className = "button " + props.buttonType;
// className={className}