import React from "react";
import Button from "../Button"
import "./nav.css"

const Nav = (props) => {

  const userOrLogin = () => {
    if (props.loggedIn){
      return props.userName;
    }
    return "login";
  }

  return (
    <div className="nav-bar text-right">
      <a href="/">
        <Button text={userOrLogin()} buttonType="navlink" />
      </a>
    </div>
  )
}

export default Nav;