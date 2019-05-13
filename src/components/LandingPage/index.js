import React from "react";
import Button from "../Button"
import Nav from "../Nav"
import InputField from "../InputField"
import { Link, withRouter } from 'react-router-dom'
import { Container, Row, Col } from '../Grid'

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
    // <div>
    //   <Nav loggedIn={props.state.loggedIn} userName={props.state.userName} />
    //   <div className="jumbotron m-5 fluid">
    //     <div className="row fluid">
    //       {/* onClick={launchDefaultGame} */}
    //       <div className="col-sm-6" onClick={launchDefaultGame}>
    //         <Button text="Launch Default Game" />
    //       </div>

    //       <div className="col-sm-6">
    //         <Link to='https://aprilleperez.github.io/realgameoflife_admin/' className="ml-3"><Button text="Create/Edit Games" /></Link>
    //       </div>
    //       {/* <a href='https://aprilleperez.github.io/realgameoflife_admin/' className="ml-3"><Button text="Create/Edit Games" /></a> */}
    //     </div>

    //     <div className="row mt-5 fluid">
    //       <h1 className="ml-3 align-bottom">Enter Game Code:</h1>

    //     </div>
    //     <InputField updateState={props.updateState} />
    //   </div>
    // </div >
    <div>
      <Nav loggedIn={props.state.loggedIn} userName={props.state.userName} />
      <Container>
        <Row>
          <Col size="sm-12">
            <h1 className="text-center">Real Game of Life</h1>
          </Col>
        </Row>

        <Row>
          <Col size="sm-12">
            <h3 className="text-center">Navigate through life's real issues!</h3>
          </Col>
        </Row>

        <Row>
          <Col size="sm-6">
            <Button text="Launch Default Game" onClick={launchDefaultGame} />
          </Col>

          <Col size="sm-6">
            <a href='https://aprilleperez.github.io/realgameoflife_admin/'><Button text="Create/Edit Games" /></a>
          </Col>
        </Row>

        <Row>
          <h3 className="text-center">Enter Game Code:</h3>
        </Row>

        <Row>
          <InputField updateState={props.updateState} />
        </Row>

      </Container>

    </div>

  )
}

export default withRouter(LandingPage);