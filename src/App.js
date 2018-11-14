import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";

import history from "./history";
import Navbar from "./Navbar";
import Home from "./Home";
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route
            exact
            path={"/"}
            render={() => {
              return (
                <div>
                  <Navbar />
                  <Home />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/explore"
            render={() => {
              return (
                <div>
                  <Navbar />
                  <About />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/about"
            render={() => {
              return (
                <div>
                  <Navbar />
                  <About />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/skills"
            render={() => {
              return (
                <div>
                  <Navbar />
                  <Skills />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/projects"
            render={() => {
              return (
                <div>
                  <Navbar />
                  <Projects />
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
