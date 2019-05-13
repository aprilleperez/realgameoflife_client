import React from "react";
import Button from "../Button"
import Nav from "../Nav"
import InputField from "../InputField"
import { Link, withRouter } from 'react-router-dom'

import "./landingPage.css"

const LandingPage = (props) => {

  let codeGen = () => {
    // generate game code
    let animals = ["aardvark", "abalone", "anteater", "antelope", "baboon", "bat", "buffalo", "camel", "capybara", "chimp", "cougar", "dolphin", "egret", "falcon", "flamingo", "fox", "gecko", "gibbon", "goat", "moose", "wombat", "walrus", "toad", "squirrel", "piglet", "meerkat", "lioness", "potato", "cow", "tuna", "eel", "bees"];

    let adjectives = ["glorious", "hilarious", "monstrous", "squishy", "orange", "sneaky", "long", "tiny", "squinty", "round", "fluffy", "genius", "unending", "immortal", "broke", "grumpy", "fake", "definitely", "probably", "doubtful", "intrepid", "dubious", "powerful", "terrible", "floppy", "pointy", "honking", "slippery"];

    let rando = Math.floor(Math.random() * 9) + 1;
    rando *= 10;
    rando += Math.floor(Math.random() * 9) + 1;

    let code = adjectives[Math.floor(Math.random() * adjectives.length)];
    code += animals[Math.floor(Math.random() * animals.length)];
    code += rando;
    console.log(`code: ${code}`);
    return code
  }

  let launchDefaultGame = () => {
    props.updateState({ gameCode: codeGen() })
    props.history.push('/lobby');
  }

  return (
    <div>
      <Nav loggedIn={props.state.loggedIn} userName={props.state.userName} />
      <div className="jumbotron m-5">
        <div className="row" onClick={launchDefaultGame}>
          <Button text="Launch a Game" buttonType="green" />
          <a href='https://aprilleperez.github.io/realgameoflife_admin/' className="ml-3"><Button buttonType="green" text="Create/Edit Games"></Button></a>
        </div>
        <div className="row mt-5">
          <h1 className="ml-3 align-bottom">Enter Game Code:</h1>
        </div>
        <InputField updateState={props.updateState} />
      </div>
    </div>

  )
}

export default withRouter(LandingPage);