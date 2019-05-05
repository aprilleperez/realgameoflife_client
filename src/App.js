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
    userName: "login"
  }

  render() {
    return (
      <BrowserRouter>
        <PrimaryLayout loggedIn={this.state.loggedIn} userName={this.state.userName}/>
      </BrowserRouter>
    );
  }
}


export default App;