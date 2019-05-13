import React  from 'react';
import {Button, Modal, Form, Accordion, Card, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import API from '../../utils/API';
import './modal.css'

class NewModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      loggedIn: false
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.name.password && this.name.orgName) {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.passsword,
        orgName: this.state.orgName
      })
        .catch(err => console.log(err));
    }
  };

 
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  registerUser = (event) => {
    event.preventDefault();

    const { firstName, lastName, email, password, orgName } = this.state;
    
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      orgName
    }

    axios.post('https://real-life-api.herokuapp.com/api/admin/signup/', newUser)
      .then(res => {
        console.log("NEW USER CREATED")
        console.log(res)
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err);
        alert('Invalid Password!')
      })
      this.handleClose()
  }

  logInUser = (event) => {
    event.preventDefault();
    localStorage.clear();
    const { email, password } = this.state;

    const loggedUser={
      email, password
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
     
    axios.post('https://real-life-api.herokuapp.com/api/admin/login', loggedUser)
      .then(res => {
        console.log("YOU'RE LOGGED IN!")
        console.log(res)
        localStorage.getItem(email, password);
        console.log(localStorage.getItem(email, password));
        if(res.status === 200){
          this.setState({
            loggedIn: true,
            user:res.data.user
          })
        }  
      })
      .catch(err => {
        console.log("I'M BROKEN! FIX ME!")
        console.log(err);
      })
        this.handleClose()      
  }
  
  
  LoggedOutUser = (event) => {
    event.preventDefault()
    console.log('logging out')
    axios.post('https://real-life-api.herokuapp.com/api/admin/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  render() {
    let login = "Login";
    if (this.state.loggedIn) login = "Welcome back!";

    return (
      <>
        <Button className="modalButton" variant="primary" onClick={this.handleShow}>
          {login}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="String" onChange={this.handleInputChange} name="email" placeholder="johndoe@test.com" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"  onChange={this.handleInputChange} name="password" placeholder="Password" />
              </Form.Group>
              <h6><i>Want to create a game? Be an admin and register down below!</i></h6>
          </Form>
          {/* This is where the sign up form is!*/}
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
              <Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="String" value={this.state.firstName} name = 'firstName' onChange={this.handleInputChange} placeholder="John" />
                  </Form.Group>
              </Row>
              <Row>
                  <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="String" value={this.state.lastName} name = 'lastName' onChange={this.handleInputChange} placeholder="Doe" />
                  </Form.Group>
              </Row>
              <Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="String" value={this.state.email} name = 'email' onChange={this.handleInputChange} placeholder="Enter email" />
                  </Form.Group>
              </Row>
              <Row>
                  <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="String" value={this.state.password} name = 'password' onChange={this.handleInputChange} placeholder="Password" />
                  </Form.Group>
              </Row>
              <Row>
                  <Form.Group as={Col} controlId="formGridOrg">
                  <Form.Label>Organization Name</Form.Label>
                  <Form.Control type="String" value={this.state.orgName} name = 'orgName' onChange={this.handleInputChange} placeholder="nunyaINC" />
                  </Form.Group>
              </Row>
          </Form.Row>
          <Button className="modalButton" onClick={this.registerUser} variant="primary" type="submit">
          Register
          </Button>
          </Form>
              </Card.Body>
              </Accordion.Collapse>
          </Card>
      {/* This is where the sign up form pops up  */}
      </Accordion>
          </Modal.Body>
          <Modal.Footer>
           {/* <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>               */}
            <Button className="modalButton" onClick={this.logInUser} variant="primary" type="submit" data-dismisss='modal'> 
              Submit 
            </Button>
          </Modal.Footer>
        </Modal>
      </>        
    );
  }
}
 export default NewModal;