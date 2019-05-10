import React from "react";
import { withRouter } from 'react-router-dom'
import "./Responses.css"

class Responses extends React.Component {
  state = {
    choiceMade: false,
    choice: undefined,
    timer: 15,
  }

  componentDidMount() {
    console.log("Responses mounted, starting timer")
    let time = this.state.timer;

    let tMinus = setInterval(() => {
      if (time > 0) {
        time--;
        this.setState({ timer: time })
      }else{
        // if the timer runs out, choose the default option
        clearInterval(tMinus);
        this.madeChoice(0)
      }
    }, 1000)
  }

  madeChoice(num) {
    // player's answer
    if (!this.state.choiceMade) {
      this.setState({ choiceMade: true, choice: num })
      this.props.choiceCB(num);
      console.log(`you chose response #${num}`);
      document.getElementById(num).setAttribute("class", "selectedAnswer")
      this.props.socket.emit("choiceMade", this.props.gameCode);
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

    if(this.state.madeChoice){
      let outcome = this.calcOutcome();
      return({outcome})
    }
    return (
      <div>
        <div>{ansArr}</div>
        <div>Timer: {this.state.timer}</div>
      </div>
    )
  }
}

export default Responses