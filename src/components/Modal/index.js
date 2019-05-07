import React  from 'react'
// import { Link } from 'react-router-dom'
// import Button from '../Button'
import {Button, Modal, FormControl} from 'react-bootstrap';


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
                <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
                <FormControl
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={'href=signup'}>
              Sign Up
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