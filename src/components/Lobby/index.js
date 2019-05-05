import React from "react";
import Nav from "../Nav"
import "./lobby.css"
import io from "socket.io-client";

let socket = "";
const Lobby = (props) => {

  if (props.state.gameCode) {
    console.log("gameCode truthy")

    socket = io('localhost:3001/');
    socket.emit("gameNum", props.state.gameCode)
  }else{
    console.log("gameCode falsy")

  }

  let topMessage = "";

  props.state.isHost ?
    topMessage = ("To join this game, go to *URL* and enter the code " + props.state.gameCode)
    : topMessage = "Waiting for game to start"

  return (
    <div>
      <Nav loggedIn={props.state.loggedIn} userName={props.state.userName} />
      <div className="container-fluid">
        <div className="top-message">{topMessage}</div>
        <div className="jumbotron m-5">
          <div className="row">
          </div>
        </div>
      </div>
    </div >
  )
}

export default Lobby;