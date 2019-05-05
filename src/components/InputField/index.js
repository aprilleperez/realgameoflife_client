import React from "react";
import { Link } from 'react-router-dom'

import Button from "../Button"


class InputField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value}, this.props.updateGameCode(this.state.value)
    );

  }

  handleSubmit(event) {
    // console.log("Game code entered: " + this.state.value);
    // console.log("props:", this.props)
    event.preventDefault();

    // window.location.replace("/lobby");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Game Code:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Link to="/lobby"><input type="submit" value="Join Game" /></Link>
      </form>

    );
  }
}

export default InputField;