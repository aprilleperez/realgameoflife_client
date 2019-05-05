import React from "react";
import Nav from "../Nav"
import "./lobby.css"

const Lobby = (props) => {

  let topMessage = "";

  props.state.isHost ? 
  topMessage = ("To join this game, go to *URL* and enter the code " + props.state.gameCode) 
  : topMessage = "Waiting for game to start" 

  console.log("props:", props.state)

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