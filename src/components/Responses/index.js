import React from "react";
import { withRouter } from 'react-router-dom'
import "./Responses.css"

class LandingPage extends React.Component {
  state = {
    choiceMade: false
  }

  madeChoice(num) {
    // player's answer
    if (!this.state.choiceMade) {
      this.setState({choiceMade: true})
      console.log(`you chose response #${num}`);
      document.getElementById(num).setAttribute("class", "selectedAnswer")

      this.props.socket.emit("choiceMade");
    }
  }

  render() {
    let ansArr = [];
    this.props.answers.forEach((elem, i) => {
      ansArr.push(
        <div className="answer" id={i} key={i} onClick={() => { this.madeChoice(i) }}>
          <p>{elem.response}</p>
        </div>
      )
    });

    return (
      <div>{ansArr}</div>
    )
  }
}

export default LandingPage