import React from "react";
import Button from "../Button"
import Modal from "../Modal"
import "./nav.css"

class Nav extends React.Component {

  state = {
    name: this.props.userName
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userName !== prevState.name) {
      return { name: nextProps.userName }
    }
    else
      return null;
  }

  render() {
    return (
      <div className="nav-bar text-right">
        <div className="title">
          Game of Real Life
        </div>
        <Modal/>
      </div>
    )
  }
}
export default Nav;