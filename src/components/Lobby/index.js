import React from "react";
import Nav from "../Nav"

const Lobby = (props) => {

  return (
    <div>
      <Nav loggedIn={props.state.loggedIn} userName={props.state.userName} />

      Lobby</div>
  )
}

export default Lobby;