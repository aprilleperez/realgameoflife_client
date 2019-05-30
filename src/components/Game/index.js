import React from 'react'
import Responses from "../Responses"
import Outcomes from "../Outcomes"
import EndDisplay from "../EndDisplay"
import "./game.css"
// import { Redirect } from "react-router-dom"

class Game extends React.Component {

  state = {
    gameState: "prestart",
    currentQuestion: 0,
    allowTimer: true,
    timer: 10,
    avatar: undefined,
    choice: undefined,
    startingTraits: undefined,
    currentStats: undefined
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

    this.countdown(10, "QandA");

    // listen for trigger to show outcome
    this.props.socket.on("showResult", () => {
      console.log("setting gameState to outcomes");
      this.setState({ gameState: "outcomes" });

      if (this.state.currentQuestion < this.props.state.gameObj.questions.length - 1) {
        this.countdown(15, "QandA");
      }
      else // if we've run out of questions, end the game
        this.countdown(15, "end")
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
      else {
        // when the timer runs out, move to the first question
        console.log(`setting gamestate as ${nextGameState}`)
        // increment question when we move on to a new QandA state
        if (this.state.gameState === "outcomes" && nextGameState === "QandA")
          this.setState({ currentQuestion: this.state.currentQuestion + 1 })
        this.setState({
          gameState: nextGameState,
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

  updateStats = (stats) => {
    this.setState({ currentStats: stats }, console.log(this.state.currentStats))
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
              <div className="centerDivs">
                <h1>
                  <div className="gameName">
                    <h4>Game Name:</h4>
                    <h1 className="boldFont orange">{gameObj.name}</h1>
                  </div>
                  <br></br>
                  <div className="startTimer"><h2>Game starts in: <span className="redTimer">{this.state.timer}</span> seconds</h2></div>
                </h1>
              </div>
            )

          case "QandA":
            return (
              <div className="centerDivs hostQuestions">
                <h4 className="text-center">Question {this.state.currentQuestion + 1}:</h4>
                  <br></br>
                  <h1 className="orange">{gameObj.questions[this.state.currentQuestion].Q}</h1>
                <br></br>
                <br></br>
                <h5>(Please select a choice on your device)</h5>
              </div>
            )

          case "outcomes":
            return (
              <div className="centerDivs">
                <h1>
                  <div>
                    <h1 className="text-center">Let's see what that did!</h1>
                    <h5 className="text-center">(Please view the outcome on your device)</h5>
                    </div>
                  <br></br>
                  <div>Next question in <span className="redTimer">{this.state.timer}</span> seconds</div>
                </h1>
              </div>
            )

          case "end":
            return (
              <div className="centerDivs">
                <h1 className="orange">Let's see how you did!</h1>
                <h5>(Please view results on your device)</h5>
                <br></br>
                <a href="https://aprilleperez.github.io/realgameoflife_client/">Back to Site</a>
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
            if (!this.state.avatar) return (<div className="centerDivs">Avatar loading...</div>)
            else {
              // Avatar intro view
              let traits = [];
              let stats = [];
              for (let i = 1; i < 6; i++) {
                stats.push(this.state.avatar["trait" + i]);
                traits.push(<div>{gameObj.traits["trait" + i] + ": " + this.state.avatar["trait" + i]}</div>)
              }
              if (!this.state.startingTraits)
                this.setState({ startingTraits: [...stats], currentStats: stats })
              return (
                <React.Fragment>
                  <div className="centerDivs">
                    <h1>
                      <img className="avatarImg" src={this.state.avatar.picture}></img>
                      <div className="displayName">You are: <span className="boldFont orange">{this.state.avatar.name}</span></div>
                      <br></br>
                      <div className="displayTraits">
                        Starting Stats:
                        <span className="boldFont blue">{traits}</span>
                      </div>
                    </h1>
                  </div>
                </React.Fragment>
              )
            }

          case "QandA":
            return (
              // show responses for current question
                <Responses choiceCB={this.choiceCB} timer={this.state.timer} question={gameObj.questions[this.state.currentQuestion]} answers={gameObj.questions[this.state.currentQuestion].responses} socket={this.props.socket} gameCode={this.props.state.gameCode} traits={gameObj.traits} currentStats={this.state.currentStats} />
            )

          case "outcomes":
            return (
              <Outcomes choice={this.state.choice} gameObj={gameObj} avatar={this.state.avatar} qNum={this.state.currentQuestion} currentStats={this.state.currentStats} statsCB={this.updateStats} />
            )

          case "end":
            let endStats = [];
            for (let i = 0; i < 5; i++) {
              endStats.push(<div>{gameObj.traits["trait" + i] + ": " + this.state.avatar["trait" + i]}</div>)
            }
            return (<div className="centerDivs">
              <h1>What a wild ride!</h1>
              <br></br>
              {/* <h1>{this.state.avatar.name}</h1>
              <h1>{this.state.startingTraits}</h1>
              <h1>{this.state.currentStats}</h1> */}
              <EndDisplay avatar={this.state.avatar} starting={this.state.startingTraits} final={this.state.currentStats} gameObj={this.props.state.gameObj} />
              <a href="https://aprilleperez.github.io/realgameoflife_client/">Back to Site</a>
            </div>)
        }
      }
    }



    // default view
    return (
      <div className="centerDivs">
        <h1>LOADING GAME 	(´｡• ᵕ •｡`)</h1>
      </div>
    )
  }
}

export default Game;