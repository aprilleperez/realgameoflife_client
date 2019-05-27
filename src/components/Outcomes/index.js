import React from "react";
import "./outcomes.css";

class Outcomes extends React.Component {
  state = {
    outcome: undefined,
    score1: undefined,
    score2: undefined
  }

  componentDidMount() {
    let gameObj = this.props.gameObj;
    let qNum = this.props.qNum;
    let choice = this.props.choice;
    let outcome = gameObj.questions[qNum].responses[choice].outcomes;

    // how much the stats will change
    let score1 = outcome[0].amount;
    let score2 = outcome[1].amount;

    if (score1 > 0) score1 = `+${score1}`;
    if (score2 > 0) score2 = `+${score2}`;

    // store the outcome obj, and the +-scores in state
    this.setState({ outcome: outcome, score1: score1, score2: score2 })

    // ************
    // Update stats based on +-scores

    let question = gameObj.questions[qNum];
    let traitList = gameObj.traits;
    let tName1 = question.trait1;
    let tName2 = question.trait2;

    let stats = this.props.currentStats;

    // find out which traits we care about for this questions
    // match trait name to trait number
    for (let i = 0; i < 5; i++) {
      if (tName1 === traitList["trait" + (i + 1)]) {
        console.log(`${tName1}, ${i}: ${stats[i]} + ${outcome[0].amount}`)
        stats[i] += outcome[0].amount;
      }
      if (tName2 === traitList["trait" + (i + 1)]) {
        console.log(`${tName2}, ${i}: ${stats[i]} + ${outcome[1].amount}`)
        stats[i] += outcome[1].amount;
      }
    }

    // Send the updated stats back to the Game component
    this.props.statsCB(stats);
  }

  render() {
    if (this.state.outcome) {
      return (
        <React.Fragment>
          <br></br>
          <div className="centerDivs">
            <h1>
              Here's what happened:
              <div>{this.state.outcome[0].text}</div>
              <br></br>
              <div>{this.state.outcome[0].trait}: {this.state.score1}</div>
              <div>{this.state.outcome[1].trait}: {this.state.score2}</div>
            </h1>
          </div>
        </React.Fragment>
      )
    }
    else
      return <div>LOADINK</div>
  }
}

export default Outcomes;