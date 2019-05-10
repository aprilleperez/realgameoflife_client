import React from 'react'
import Responses from "../Responses"
// import { Redirect } from "react-router-dom"

class Game extends React.Component {

  state = {
    gameRunning: false,
    gameState: "intro",
    currentQuestion: 0,
    timer: 10,
    avatar: undefined
  }

  componentDidMount() {
    console.log(this.props.state.gameObj);
    // If this is the host, tell all the player clients to start
    if (this.props.state.host) {
      this.props.socket.emit("startPlayers", this.props.state.gameCode, this.props.state.gameObj)
    }

    setInterval(() => {
      let time = this.state.timer;
      if (time > 0) {
        time--;
        this.setState({ timer: time })
      } else {
        // when the timer runs out, move to the first question
        this.setState({ gameState: "QandA" })
      }
    }, 1000)
  }

  render() {

    let socket = this.props.socket;

    if (!this.props.state.host && !this.state.gameRunning) {
      // if not the host, select an avatar and automatically start game
      let rand = Math.floor(Math.random() * this.props.state.gameObj.avatars.length)
      console.log("Avatar is:", this.props.state.gameObj.avatars[rand])
      this.setState({
        gameRunning: true,
        avatar: this.props.state.gameObj.avatars[rand]
      })
    }

    // listen for game start message, relevant for host
    socket.on("gameStart", () => {
      console.log("heard gameStart")
      console.log(this.state.props)
      this.setState({ gameRunning: true })
    })

    if (this.state.gameRunning && this.props.state.gameObj) {
      let gameObj = this.props.state.gameObj;

      // **************************************
      // ************ HOST VIEWS **************
      // **************************************
      if (this.props.state.host) {
        switch (this.state.gameState) {

          case "intro":
            return (
              <div>
                <div>{gameObj.name}</div>
                <div>Game starts in: {this.state.timer} seconds</div>
              </div>
            )

          case "QandA":
            return (
              // QandA view
              <div>Question: {gameObj.questions[this.state.currentQuestion].Q}</div>
            )

        }
      }
      // **************************************
      // *********** PLAYER VIEWS *************
      // **************************************
      else {
        switch (this.state.gameState) {

          case "intro":
            // if we're still waiting for the avatar to load
            if (!this.state.avatar) return (<div>avatar loading</div>)
            else {
              // Avatar intro view
              let traits = [];
              for (let i = 1; i < 6; i++) {
                traits.push(<div>{gameObj.traits["trait" + i] + ": " + this.state.avatar["trait" + i]}</div>)
              }
              return (
                <div>
                  <div>{this.state.avatar.name}</div>
                  <div>{traits}</div>
                </div>
              )
            }

          case "QandA":
            return (
              // show responses for current question
              <Responses timer={this.state.timer} answers={gameObj.questions[this.state.currentQuestion].responses} socket={this.props.socket} gameCode={this.props.state.gameCode} />
            )

        }
      }
    }



    // default view
    return (
      <div>
        LOADING GAME ^_^
      </div>
    )
  }
}

export default Game;