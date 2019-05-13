import React from "react";

function Outcomes(props) {

  let gameObj = props.gameObj;
  let avatar = props.avatar;
  let qNum = props.qNum;
  let choice = props.choice;
  let outcome = gameObj.questions[qNum].responses[choice].outcomes;
 
  let trait1 = gameObj.questions[qNum].trait1;
  let trait2 = gameObj.questions[qNum].trait2;

  console.log(gameObj)

  return (
    <div className="container">
      <h1>Here's what happened:</h1>
      <div>{outcome[0].text}</div>
      <div>{outcome[0].trait}: {outcome[0].upDown}</div>
      <div>{outcome[1].trait}: {outcome[1].upDown}</div>
    </div>
  )
}

export default Outcomes;