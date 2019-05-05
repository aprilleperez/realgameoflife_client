import React from "react";
import Button from "../Button"
import "./nav.css"

class Nav extends React.Component {

  state = {
    name: this.props.userName
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.userName!==prevState.name){
      return{name: nextProps.userName}
    }
    else
    return null;
  }

  render() {
    return (
      <div className="nav-bar text-right">
        <a href="/">
          <Button text={this.state.name} buttonType="navlink" />
        </a>
      </div>
    )
  }
}
export default Nav;