import React from 'react';


// These two lines make the socket connection to the server. Use them in any component that needs a socket channel
import io from "socket.io-client";
const socket = io('localhost:3001/');

class ChatField extends React.Component {


  render(){
    return (<div>hi there</div>)
  }
}

export default ChatField;