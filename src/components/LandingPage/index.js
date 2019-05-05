import React from "react";
import Button from "../Button"
import Nav from "../Nav"

const LandingPage = (props) => {

  return(
    <div className="container-fluid">
      <Nav  loggedIn={props.loggedIn} userName={props.userName}/>
      <div className="jumbotron m-5 ">
        <Button text="Launch a Game" buttonType="green" />
      
      
      </div>
    
    
    </div>
  )
}

export default LandingPage;