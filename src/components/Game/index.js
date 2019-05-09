import React from 'react'
import Responses from "../Responses"
// import { Redirect } from "react-router-dom"

class Game extends React.Component {

  state = {
    gameRunning: false,
    currentQuestion: 0
  }

  componentDidMount() {
    console.log(this.props.state.gameObj);
    // If this is the host, tell all the player clients to start
    if (this.props.state.host) {
      this.props.socket.emit("startPlayers", this.props.state.gameCode, this.props.state.gameObj)
    }
  }

  render() {

    let socket = this.props.socket;

    if (!this.props.state.host && !this.state.gameRunning) {
      // if not the host, automatically start game

      this.setState({ gameRunning: true })
    }

    // listen for game start message, relevant for host
    socket.on("gameStart", () => {
      console.log("heard gameStart")
      console.log(this.props.gameObj)
      this.setState({ gameRunning: true })
    })

    if (this.state.gameRunning && this.props.state.gameObj) {
      let gameObj = this.props.state.gameObj;

      if (this.props.state.host) {

        return (
          // host
          <div>Question: {gameObj.questions[this.state.currentQuestion].Q}</div>
        )
      } else {
        return (
          // players
          <Responses answers={gameObj.questions[this.state.currentQuestion].responses} socket={this.props.socket}/>
        )
      }
    }





    return (
      <div>
        LOADING GAME ^_^
      </div>
    )
    // redirect to root if this isn't a valid game
    // return (
    //   <div>
    //     <Redirect to='/' />
    //   </div>
    // )
  }

}

export default Game;