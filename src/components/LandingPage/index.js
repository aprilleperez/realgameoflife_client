import React from "react";
import Button from "../Button"
import Nav from "../Nav"
import InputField from "../InputField"
import { Link } from 'react-router-dom'

import "./landingPage.css"

const LandingPage = (props) => {

  return (
    <div>
      <Nav loggedIn={props.state.loggedIn} userName={props.state.userName} />
      <div className="jumbotron m-5">
        <div className="row">
          <Link to="/" className="ml-3"><Button text="Launch a Game" buttonType="green" /></Link>
          <Link to="/" className="ml-3"><Button text="Create/Edit Games" buttonType="green" /></Link>
        </div>
        <div className="row mt-5">
        <h1 className="ml-3 align-bottom">Enter Game Code:</h1>
        
        </div>
        <InputField updateState={props.updateState}/>
      </div>


    </div>
  )
}

export default LandingPage;