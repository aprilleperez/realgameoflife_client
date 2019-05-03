import React from 'react';
import './App.css';
import ChatField from '../src/components/ChatField/'
import Button from '../src/components/Button'

class App extends React.Component {

  state = {}

  render() {
    return (
      <div className="container">
        <ChatField />
        <Button text={"Launch!"} buttonType={"green"}/>
      </div>
    );
  }
}


export default App;