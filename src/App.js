import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import PrimaryLayout from '../src/components/PrimaryLayout'


import io from "socket.io-client";
const socket = io('localhost:3001/');

class App extends Component {

  state = {
    gameState: "start",
    loggedIn: false,
    userName: "login",
    isHost: false,
    gameCode: ""
  }

  render() {
    return (
      <BrowserRouter>
        <PrimaryLayout
          state={this.state}
        />
      </BrowserRouter>
    );
  }
}


export default App;