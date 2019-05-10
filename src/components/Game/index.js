import React from 'react'
import Responses from "../Responses"
import Outcomes from "../Outcomes"
// import { Redirect } from "react-router-dom"

class Game extends React.Component {

  state = {
    gameState: "prestart",
    currentQuestion: 0,
    allowTimer: true,
    timer: 10,
    avatar: undefined,
    choice: undefined
  }

  componentDidMount() {
    // If this is the host, tell all the player clients to start
    if (this.props.state.host) {
      this.props.socket.emit("startPlayers", this.props.state.gameCode, this.props.state.gameObj)
    }
    else {
      // if not the host, select an avatar and start game
      let rand = Math.floor(Math.random() * this.props.state.gameObj.avatars.length)
      this.setState({
        avatar: this.props.state.gameObj.avatars[rand],
        gameState: "intro"
      })
    }

    this.countdown(10, "intro", "QandA");

    // listen for trigger to show outcome
    this.props.socket.on("showResult", () => {
      this.setState({ gameState: "outcomes" })
    })
  }

  countdown = (num, nextGameState) => {
    // console.log(`starting countdown: ${num} ${currentGameState} ${nextGameState}`)
    this.setState({ timer: num })

    let tMinus = setInterval(() => {
      let time = this.state.timer;
      if (time > 0) {
        time--;
        this.setState({ timer: time })
        return
      }
      // console.log(`this.state.gameState: ${this.state.gameState}, currentGameState: ${currentGameState}`)
      // if (this.state.gameState === currentGameState) {
      else{
        // when the timer runs out, move to the first question
        console.log(`setting gamestate as ${nextGameState}`)
        this.setState({ 
          gameState: nextGameState ,
          allowTimer: true
        })
        clearInterval(tMinus)
      }
    }, 1000)


  }

  choiceCB = (num) => {
    this.setState({ choice: num })
    console.log(`setting choice ${num} in Game component`)
  }

  render() {

    let socket = this.props.socket;

    // listen for game start message, relevant for host
    socket.on("gameStart", () => {
      this.setState({ gameState: "intro" })
    })

    if (this.props.state.gameObj) {
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
              <div>Question: {gameObj.questions[this.state.currentQuestion].Q}</div>
            )

          case "outcomes":
            // start timer for next question
            if (this.state.timer < 1 && this.allowTimer) {
              this.setState({allowTimer: false});
              this.countdown(10, "QandA");
            }
            return (
              <div className="container">
                <div>Well, let's see what that did...</div>
                <div>Next question in {this.state.timer}</div>
              </div>
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
            // clearInterval(this.countdown)
            return (
              // show responses for current question
              <Responses choiceCB={this.choiceCB} timer={this.state.timer} answers={gameObj.questions[this.state.currentQuestion].responses} socket={this.props.socket} gameCode={this.props.state.gameCode} />
            )

          case "outcomes":
            return (
              <Outcomes choice={this.state.choice} gameObj={gameObj} avatar={this.state.avatar} qNum={this.state.currentQuestion} />
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