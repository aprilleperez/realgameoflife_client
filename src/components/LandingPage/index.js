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
    <div>
      <Nav loggedIn={props.state.loggedIn} userName={props.state.userName} />
      <Container>
        <Row>
          <Col size="sm-12">
            <div className="appHero">
              <h1 className="text-center appHeader">In Their Shoes</h1>
            </div>

          </Col>
        </Row>

        <Row>
          <Col size="sm-12">
            <h4 className="text-center appSubHeader orange">A game platform meant to <em><strong>begin dialogue</strong></em> on your organization's client base and for experiencing life through <em><strong>their</strong></em> shoes.</h4>
          </Col>
        </Row>

        <Row>

          <Col size="sm-6">
            <Row>
              <Col size="sm-12">
                <h5 className="text-center landingIns"><strong className="orange">For Game Hosts:</strong>
                  <br></br>
                  <br></br>
                  Start by either launching our default game, or by creating or editing a custom game
                  <br></br>
                  (must be logged in as an admin for this).</h5>
              </Col>
            </Row>

            <Row>
              <Col size="sm-12">
                <Button text="Launch Default Game" onClick={launchDefaultGame} />
              </Col>
            </Row>

            <Row>
              <Col size="sm-12">
                <a href='https://aprilleperez.github.io/realgameoflife_admin/'><Button text="Create/Edit Games" /></a>
              </Col>
            </Row>
          </Col>


          <Col size="sm-6">
            <Row>
              <Col size="sm-12">
                <h5 className="text-center landingIns"><strong className="orange">For Game Players:</strong>
                <br></br>
                <br></br>
                Enter a game code below provided to you by the host.</h5>
              </Col>
            </Row>

            <Row>
              <Col size="sm-12">
                <InputField updateState={props.updateState} />
              </Col>
            </Row>
          </Col>

        </Row>

      </Container>
    </div >
  )
}

export default withRouter(LandingPage);








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