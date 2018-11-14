import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import ExploreButton from "./ExploreButton";
//import history from "./history";
import Navbar from "./Navbar";
class Home extends Component {
  render() {
    // if (this.state.redirectMe) {
    //   return <Redirect to="/explore" />;
    // } else {
    return (
      <span>
        <div className="home-background background-img" />

        <div className="home-text">
          <h1 className="name">Varshant Deshwal</h1>
          <h2>Junior Full Stack Developer</h2>
        </div>
        <ExploreButton />
      </span>
    );
  }
}

export default Home;
