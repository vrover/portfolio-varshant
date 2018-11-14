import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-inverse nav-color">
        <div className="container-fluid">
          <div style={{ marginLeft: "40%" }}>
            <div>
              <ul className="nav navbar-nav">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
