import React from "react";
import { withRouter } from 'react-router-dom'
import "./Responses.css"

class LandingPage extends React.Component {
  state = {}

  render() {
    let ansArr = [];
    this.props.answers.forEach((elem, i) => {
      ansArr.push(
        <div className="answer" key={i} onClick={this.props.madeChoice(i)}>
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