import React from 'react';
import io from "socket.io-client";
const socket = io('localhost:3001/');

class ChatField extends React.Component {


  render(){
    return (<div>hi</div>)
  }
}

export default ChatField;