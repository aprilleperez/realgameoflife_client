import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from '../LandingPage'
import Lobby from "../Lobby"

function PrimaryLayout (props) {

  // allows us to pass props (logged in status and username) into the landing page when using a Route. 
  const landingPage = () => {
    return (<LandingPage state={props.state} updateGameCode={props.updateGameCode}/>)
  }

  const lobby = () => {
    return <Lobby state={props.state}/>

  }

  return (
    <div>
        <Switch>
          <Route path="/lobby" render={lobby} />

          {/* Uses render to load the landing page via function so we can pass in props */}
          <Route path="/" exact render={landingPage} />

          {/* Catch all, redirects to landing page */}
          <Redirect to="/" />
        </Switch>
    </div>
  )
}

export default PrimaryLayout;