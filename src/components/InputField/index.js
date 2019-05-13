import React from "react";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from "../Button";
import { Container, Row, Col } from '../Grid'


class InputField extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }, this.props.updateState({ gameCode: event.target.value })
    );
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="sm-12">
            <Form>
              <Form.Group controlId="formBasicEmail" className="thisForm">
                <Form.Control
                  type="text" placeholder="Game Code" value={this.state.value} onChange={this.handleChange} />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col size="sm-12">
            <Link to="/lobby"><Button text="Join Game"><input type="submit" value="Join Game" /></Button></Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default InputField;




     // <form onSubmit={this.handleSubmit}>
      //   <label>
      //     Game Code:
      //     <input type="text" value={this.state.value} onChange={this.handleChange} />
      //   </label>
      //   <Link to="/lobby"><input type="submit" value="Join Game" /></Link>
      // </form>



      // <div className="container">
      //   <div className="row">
      //     <div className="col-sm-4">
      //       <Form>
      //         <Form.Group controlId="formBasicEmail" className="thisForm">
      //           <Form.Control
      //             type="text" placeholder="Game Code" value={this.state.value} onChange={this.handleChange} />
      //         </Form.Group>
      //       </Form>
      //     </div>
      //     <div className="col-sm-4">
      //       <Link to="/lobby"><input type="submit" value="Join Game" /></Link>
      //     </div>
      //   </div>
      // </div>
