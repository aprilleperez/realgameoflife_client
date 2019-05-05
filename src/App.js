import React from 'react';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import PrimaryLayout from '../src/components/PrimaryLayout'

class App extends Component {

  state = {
    gameState: "start",
    loggedIn: false,
    userName: "login",
    isHost: true,
    gameCode: ""
  }

  updateGameCode = (code) => {
    this.setState({gameCode: code}, () => console.log(this.state));
  }

  render() {
    return (
      <BrowserRouter>
        <PrimaryLayout
          state={this.state}
          updateGameCode={this.updateGameCode}
        />
      </BrowserRouter>
    );
  }
}


export default App;