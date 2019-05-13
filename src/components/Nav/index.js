import React from "react";
import { Link } from "react-router-dom";
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
      // <div className="nav-bar text-right">
      //   <div className="title">
      //     Game of Real Life
      //   </div>
      //   <Modal/>
      // </div>
      <nav className="appNav navbar sticky-top navbar-expand-lg navbar-light mb-2">
        <Link className="navbar-brand" to="/">
          Real Game of Life
        </Link>
        <button
          // this is for onClick of hamburger
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* determining if hamburger toggle will open or not */}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Dashboard
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/create" || "/create/avatars" || "/create/questions" ? "nav-link active" : "nav-link"}
                to={`/create`}
              >
                Create
              </Link>
            </li> */}
          </ul>
        </div>
        <Modal />
      </nav>
    )
  }
}
export default Nav;

