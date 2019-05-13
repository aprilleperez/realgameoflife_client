import React from "react";

function Outcomes(props) {

  let gameObj = props.gameObj;
  let avatar = props.avatar;
  let qNum = props.qNum;
  let choice = props.choice;
  let outcome = gameObj.questions[qNum].responses[choice].outcomes;

  let score1 = outcome[0].amount;
  let score2 = outcome[1].amount;

  if (score1 > 0) score1 = `+${score1}`;
  if (score2 > 0) score2 = `+${score2}`;

  console.log(gameObj)

  return (
    <React.Fragment>
      <br></br>
      <h1>
        Here's what happened:
      <div>{outcome[0].text}</div>
        <div>{outcome[0].trait}: {score1}</div>
        <div>{outcome[1].trait}: {score2}</div>
      </h1>
    </React.Fragment>
  )
}

export default Outcomes;