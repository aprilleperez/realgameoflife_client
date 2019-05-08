import React from 'react'
import { Redirect } from "react-router-dom"

class Game extends React.Component {

  state = {
    gameRunning: false,
    question: 0
  }

  componentDidMount() {
    console.log("did mount")
    if (this.props.state.host) {
      console.log(`Game comp mounted, sending start to all players in room ${this.props.state.gameCode}`)
      this.props.socket.emit("startPlayers", this.props.state.gameCode, this.props.state.gameObj)
    }
  }

  render() {

    let socket = this.props.socket;

    if (!this.props.state.host && !this.state.gameRunning){
      // if not the host, automatically start game
      
      this.setState({gameRunning: true})
    }

    // listen for game start message, relevant for host
    socket.on("gameStart", () => {
      console.log("heard gameStart")
      this.setState({ gameRunning: true })
    })

    if (this.state.gameRunning && this.props.state.gameObj) {
      let gameObj = this.props.state.gameObj;

      console.log(gameObj)

      if (this.props.state.host) {
        return (
          <div>Question: {gameObj.questions[0].Q}!</div>
        )
      } else {
        return (
          <div>Responses: {gameObj.questions[0].responses[0].response}!</div>
        )
      }
    }





    return (
      <div>LOADING GAME ^_^
        {console.log(this.props.state.gameObj)}
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