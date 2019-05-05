import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from '../LandingPage'
import Lobby from "../Lobby"

function PrimaryLayout (props) {

  // allows us to pass props (logged in status and possibly username) into the landing page when using a Route. 
  const landingPage = () => {
    return (<LandingPage loggedIn={props.loggedIn} userName={props.userName}/>)
  }

  return (
    <div className="primary-layout">
        <Switch>
          <Route path="/lobby" component={Lobby} />

          {/* Uses render to load the landing page via function to we can pass in props */}
          <Route path="/" exact render={landingPage} />

          {/* Catch all, redirects to landing page */}
          <Redirect to="/" />
        </Switch>
    </div>
  )
}

export default PrimaryLayout;