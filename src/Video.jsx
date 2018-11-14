import React, { Component } from "react";
class Video extends Component {
  state = {};
  render() {
    return (
      <div>
        Click here to watch demo :{" "}
        <span className="video" onClick={this.props.playVideo}>
          <i class="fas fa-video fa" />
        </span>
        {this.props.status ? (
          <div>
            <span className="close">
              <i
                class="fas fa-times fa fa-spin"
                onClick={this.props.closeVideo}
              />
            </span>
            <br />
          </div>
        ) : null}
        {this.props.status ? (
          <iframe
            src={this.props.url}
            width="720"
            height="480"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        ) : null}
      </div>
    );
  }
}

export default Video;
