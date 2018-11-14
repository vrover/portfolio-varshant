import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <div className="box">
          <div className="img-div">
            <img
              src="https://lh5.googleusercontent.com/9QpivAMAuZM2bmtdxXzXciCVbhUC18yPID_4YR3uFSnEQii58KnQ9wCcXKA=w2400"
              className="my-img"
            />
            <br />
            <br />
          </div>

          <div className="aboutDetails">
            <span>Hi, I am Varshant Deshwal.</span>
            <br />
            <span>I'm a web designer/developer.</span>
            <br />
            <span>Did my graduation from NIT Agartala.</span>
            <br />
            <span> Currently, working as Project Engineer at Wipro Ltd.</span>

            {/* <a href="https://www.linkedin.com/in/varshant-deshwal/">
              {" "}
              <span className="socialIcons">
                <i class="fab fa-linkedin" />
              </span>
            </a>
            <a href="https://www.facebook.com/vrover.deshwal">
              <span className="socialIcons">
                <i class="fab fa-facebook-square" />
              </span>
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
