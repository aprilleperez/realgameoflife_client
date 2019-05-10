import React from 'react';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import PrimaryLayout from '../src/components/PrimaryLayout'
import io from "socket.io-client";

let socket = "";
process.env.PORT ? socket = io('https://real-life-api.herokuapp.com/') 
: socket = io("localhost:3001");

class App extends Component {

  state = {
    gameState: "start",
    loggedIn: false,
    userName: "login",
    gameCode: "",
    gameObj: undefined,
    host: false
  }

  updateState = (vals) => {
    // console.log(`updating top state`)
    this.setState(vals);
  }

  render() {
    return (
      <BrowserRouter>
        <PrimaryLayout
          state={this.state}
          updateState={this.updateState}
          socket={socket}
        />
      </BrowserRouter>
    );
  }
}


export default App;