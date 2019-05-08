import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from '../LandingPage'
import Lobby from "../Lobby"
import Game from "../Game"

class PrimaryLayout extends React.Component {

  state = {
  }
  render() {

    const setGame = (game) => {
      console.log(`setting game as ${game.name}`)
      this.setState({gameObj: game})
    }

    // allows us to pass props (logged in status and username) into the landing page when using a Route. 
    const LandingPageComponent = () => {
      return (<LandingPage state={this.props.state} updateState={this.props.updateState} setGame={setGame} />)
    }

    const LobbyComponent = () => {
      return <Lobby state={this.props.state} updateState={this.props.updateState} socket={this.props.socket}/>

    }

    const GameComponent = () => {
      return <Game state={this.props.state} socket={this.props.socket} />
    }

    return (
      <div>
        <Switch>
          <Route path="/game" render={GameComponent} />

          <Route path="/lobby" render={LobbyComponent} />

          {/* Uses render to load the landing page via function so we can pass in props */}
          <Route path="/" exact render={LandingPageComponent} />

          {/* Catch all, redirects to landing page */}
          <Redirect to="/" />

        </Switch>
      </div>
    )
  }
}
export default PrimaryLayout;