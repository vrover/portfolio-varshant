import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import Video from "./Video";

class Projects extends Component {
  state = {
    todoClicked: false,
    spotifySearchClicked: false,
    conferenceClicked: false
  };
  playVideo = name => {
    this.setState({ [name]: true });
  };
  closeVideo = name => {
    this.setState({ [name]: false });
  };
  render() {
    return (
      <div className="container">
        <Panel id="collapsible-panel-example-3" defaultExpanded>
          <Panel.Toggle>
            <Panel.Heading className="head-color">
              <Panel.Title className="no-decoration">To-Do List</Panel.Title>
            </Panel.Heading>
          </Panel.Toggle>
          <Panel.Collapse>
            <Panel.Body className="body-color">
              <p>To-Do is the easiest way to get stuffs done.</p>
              <p>
                This application allows you to add tasks, edit, remove and mark
                them as completed on a daily basis.
              </p>
              <h4>Tools and Technologies used :</h4>
              <ul>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>React JS</li>
                <li>CSS</li>
              </ul>
              <Video
                playVideo={() => this.playVideo("todoClicked")}
                closeVideo={() => this.closeVideo("todoClicked")}
                status={this.state.todoClicked}
                url="https://player.vimeo.com/video/300478536?loop=1&title=0&byline=0&portrait=0"
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel id="collapsible-panel-example-3" defaultNotExpanded>
          <Panel.Toggle>
            <Panel.Heading className="head-color">
              <Panel.Title className="no-decoration">
                Spotify Search
              </Panel.Title>
            </Panel.Heading>
          </Panel.Toggle>
          <Panel.Collapse>
            <Panel.Body className="body-color">
              Spotify Search can help you explore your favourite artists by
              listing the albums and songs using Spotify APIs.
              <h4>Tools and Technologies used :</h4>
              <ul>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>React JS</li>
                <li>CSS</li>
              </ul>
              <Video
                playVideo={() => this.playVideo("spotifySearchClicked")}
                closeVideo={() => this.closeVideo("spotifySearchClicked")}
                status={this.state.spotifySearchClicked}
                url="https://player.vimeo.com/video/300497733?loop=1&title=0&byline=0&portrait=0"
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel id="collapsible-panel-example-3" defaultNotExpanded>
          <Panel.Toggle>
            <Panel.Heading className="head-color">
              <Panel.Title className="no-decoration">
                Conference Room Booking App
              </Panel.Title>
            </Panel.Heading>
          </Panel.Toggle>
          <Panel.Collapse>
            <Panel.Body className="body-color">
              This app helps you to lookup the available rooms and book them.
              <h4>Tools and Technologies used :</h4>
              <ul>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>React JS</li>
                <li>Redux</li>
                <li>Mongo DB</li>
                <li>Node JS</li>
                <li>CSS</li>
              </ul>
              <Video
                playVideo={() => this.playVideo("conferenceClicked")}
                closeVideo={() => this.closeVideo("conferenceClicked")}
                status={this.state.conferenceClicked}
                url="https://player.vimeo.com/video/300489087?loop=1&title=0&byline=0&portrait=0"
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}

export default Projects;
