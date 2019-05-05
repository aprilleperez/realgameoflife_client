import React from "react";
import Button from "../Button"
import Nav from "../Nav"
import "./landingPage.css"

const LandingPage = (props) => {

  return (
    <div>
      <Nav loggedIn={props.state.loggedIn} userName={props.state.userName} />
      <div className="jumbotron m-5">
        <div className="row">
          <a href="/" className="ml-3"><Button text="Launch a Game" buttonType="green" /></a>
          <a href="/" className="ml-3"><Button text="Create/Edit Games" buttonType="green" /></a>
        </div>
        <div className="row mt-5">
        <h1 className="ml-3 align-bottom">Enter Game Code:</h1>
        <input type="text" className="code-box mx-2"></input>
        <a href="/lobby"><Button text="Join Game" buttonType="green" /></a>
        
        </div>
      </div>


    </div>
  )
}

export default LandingPage;