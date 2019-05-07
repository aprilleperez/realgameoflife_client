import React from "react";
import Nav from "../Nav"
import "./lobby.css"
import { Redirect } from 'react-router-dom'

let players = 0;
let isConnected = false;

class Lobby extends React.Component {

  state = {
    host: false,
    players: 0
  }

  render() {
    let socket = this.props.socket;

    console.log(`socket ID is ${socket.id}`);

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
        if (!this.state.host)
          this.setState({ host: true });
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
        for (let i = 0; i<this.state.players; i++){
          playerIcons.push(<img src="smiley.png" alt="player"></img>)
        }
      }
      let jumbo =
        <div className="jumbotron m-5">
          <p>{playerCountMessage}</p>
          <div className="row players">
            {/* {playerIcons} */}
            {playerIcons}
          </div>
        </div>


      return (
        <div>
          <Nav loggedIn={this.props.state.loggedIn} userName={this.props.state.userName} />
          <div className="container-fluid">
            <div className="top-message">{topMessage}</div>
            {jumbo}
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
export default Lobby;