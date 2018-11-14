import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ExploreButton extends Component {
  state = {};
  navigate = () => {
    //this.setState({ redirectMe: true });
    this.props.history.push("/explore");
    console.log(this.props.history);
  };
  render() {
    return (
      <div className="explore">
        <span
          style={{ marginLeft: "10px", marginTop: "2px" }}
          onClick={this.navigate}
        >
          <i className="fas fa-chevron-circle-right" />
        </span>
      </div>
    );
  }
}

export default withRouter(ExploreButton);
