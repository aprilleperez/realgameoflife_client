import React from "react";
import Nav from "../Nav"
import Button from "../Button"
import { Redirect, Link, withRouter } from "react-router-dom"
import { Container } from "react-bootstrap"
import "./lobby.css"
import axios from 'axios';

class Lobby extends React.Component {

  state = {
    host: false,
    players: 0
  }

  getDefaultGame = async () => {
    let results = await axios.get("https://real-life-api.herokuapp.com/api/games")
    // console.log(this.props.updateState)
    this.props.updateState({ gameObj: results.data[5] })
  }

  gameLaunchHandler = () => {
    console.log("getting game");
    this.getDefaultGame();
  }

  // Maybe use this later to clean up the code a little
  componentDidMount() { }

  render() {

    let socket = this.props.socket;

    // console.log(`socket ID is ${socket.id}`);

    // listen for game start message
    socket.on("gameStart", async () => {
      console.log("heard gameStart")
      let results = await axios.get("https://real-life-api.herokuapp.com/api/games")

      //hardcoding in the game, needs update
      this.props.updateState({ gameObj: results.data[5] })
      
      this.props.history.push('/game');
    })

    if (this.props.state.gameCode) {
      if (!this.state.host)
        socket.emit("gameNum", this.props.state.gameCode);


      // small bug, triggers like 60 times, doesn't break anything though
      socket.on("playerCount", (count) => {
        console.log("Players:", count);
        if (count !== this.state.players)
          this.setState({ players: count });
      })

      // if we receive the "You're the host!"" message
      socket.on("host", () => {
        console.log("host message...");
        if (!this.state.host) {
          this.setState({ host: true });
          // also update top level state 
          this.props.updateState({ host: true })
        }
      })

      let topMessage = "";

      this.state.host ?
        topMessage = ("To join this game, go to *URL* and enter the code " + this.props.state.gameCode)
        : topMessage = "Waiting for game to start"

      // construct players ready string and icons
      let playerCountMessage = "";
      let playerIcons = [];
      let s = "s";
      if (this.state.players === 1)
        s = "";
      if (this.state.host) {
        playerCountMessage = `${this.state.players} player${s} ready`;
        for (let i = 0; i < this.state.players; i++) {
          playerIcons.push(<img src="smiley.png" key={i} alt="player"></img>)
        }

        let jumbo = "";
        jumbo =
          <div className="jumbotron m-5">
            <p>{playerCountMessage}</p>
            <div className="row players">
              {playerIcons}
            </div>
          </div>

        return (
          // host view
          <div>
            <Nav loggedIn={this.props.state.loggedIn} userName={this.props.state.userName} />
            <div className="container-fluid">
              <div className="top-message">{topMessage}</div>
              {jumbo}
            </div>
            <Container>
              <div className="">
                <Link to="/game" onClick={this.gameLaunchHandler}>
                  <Button buttonType="green" text="Launch Game" />
                </Link>
              </div>
            </Container>
          </div >
        )
      }
      return (
        // player view
        <div>
          <div className="container">
            <div className="top-message">{topMessage}</div>
          </div>
        </div >
      )
    }
    return (
      <div>
        <Redirect to='/' />
      </div>
    )
  }
}

// wrapping the Lobby component in withRouter allows the history push up above for forced redirect
export default withRouter(Lobby);