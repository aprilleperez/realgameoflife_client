import React from "react";
import "./button.css";


function Button(props) {

  const handleClick = () => {
    props.onClick(props.destination);
  }

  let className = "button" + props.buttonType;
  return (
    <div onClick={handleClick} className="wrapper">
      <button className={className}>{props.text}</button>
    </div>
  )
}

export default Button;