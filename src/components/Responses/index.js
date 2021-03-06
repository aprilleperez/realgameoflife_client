import React from "react";
import { withRouter } from 'react-router-dom'
import "./Responses.css"
import "../Game/game.css"

class Responses extends React.Component {
  state = {
    choiceMade: false,
    choice: undefined,
    timer: 20,
  }

  componentDidMount() {
    console.log("Responses mounted, starting timer")
    let time = this.state.timer;

    let tMinus = setInterval(() => {
      if (time > 0) {
        time--;
        this.setState({ timer: time })
      } else {
        // if the timer runs out, choose the default option
        clearInterval(tMinus);
        this.madeChoice(0)
      }
    }, 1000)

    let question = this.props.question;
    let traitList = this.props.traits;
    let tName1 = question.trait1;
    let tName2 = question.trait2;

    let score1 = "";
    let score2 = "";

    // find out which traits we care about for this questions
    // match trait name to trait number
    for (let i = 0; i < 5; i++) {
      if (tName1 === traitList["trait" + (i+1)]) {
        score1 = this.props.currentStats[i];
        console.log(`${tName1}, which is trait${i}, currently ${score1} points`)
        this.setState({score1: score1})
      }
      if (tName2 === traitList["trait" + (i+1)]) {
        score2 = this.props.currentStats[i];
        console.log(this.props.currentStats);
        console.log(`${tName2}, which is trait${i}, currently ${score2} points`)
        this.setState({score2: score2})
      }
    }
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

    // add up the current values of the relevant traits for this question, and disable any responses the player isn't qualified for
    this.props.answers.forEach((elem, i) => {
      // console.log(this.state.score1, this.state.score2)
      //use this next line to adjust overall difficulty
      if (this.state.score1 + this.state.score2 > ((i + 1) * 8 - 4) || (i === 0)) {
        ansArr.push(
          <div className="answer" id={i} key={i} onClick={() => { this.madeChoice(i) }}>
            <p>{elem.response}</p>
          </div>
        )
      } else {
        ansArr.push(
          <div className="invalid" id={i} key={i}>
            <p>{elem.response}</p>
          </div>
        )
      }
    });



    return (
      <div className="centerDivs">
        <div>{ansArr}</div>
        <br></br>
        <div>Timer: {this.state.timer}</div>
      </div>
    )
  }
}

export default Responses