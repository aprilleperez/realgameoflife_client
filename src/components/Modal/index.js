import React  from 'react'
// import { Link } from 'react-router-dom'
// import Button from '../Button'
import {Button, Modal, Form, Accordion, Card, Col} from 'react-bootstrap';


class NewModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Login
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign In!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="johndoe@test.com" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
            <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    SignUp
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Form>
            <Form.Row>
                <row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstName" placeholder="John" />
                    </Form.Group>
                </row>
                <row>
                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastName" placeholder="Doe" />
                    </Form.Group>
                </row>
                <row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </row>
                <row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </row>
                <row>
                    <Form.Group as={Col} controlId="formGridOrg">
                    <Form.Label>Organization Name</Form.Label>
                    <Form.Control type="orgName" placeholder="ie Starbucks Coffee Company" />
                    </Form.Group>
                </row>
            </Form.Row>

            <Button variant="primary" type="submit">
                Register
            </Button>
            </Form>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        
        </Accordion>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </>        
      );
    }
  }
  
 

  export default NewModal;