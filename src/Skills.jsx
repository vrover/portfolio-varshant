import React, { Component } from "react";
class Skills extends Component {
  state = {};
  render() {
    return (
      <div className="skills-background">
        <div className="container ">
          <table style={{ border: null, marginTop: "20%", marginLeft: "20%" }}>
            <tbody>
              <tr>
                <td>
                  <span className="img">
                    <i class="fab fa-js-square fa-5x" />
                  </span>
                </td>
                <td>
                  <span className="img">
                    <i class="fab fa-css3 fa-5x" />
                  </span>
                </td>
                <td>
                  <span className="img">
                    <i class="fab fa-react fa-5x fa-spin" />
                  </span>
                </td>
                <td>
                  <span className="img">
                    <i class="fab fa-node fa-5x" />
                  </span>
                </td>
                <td>
                  <img
                    src="https://thumb.ibb.co/gVCNPf/bootstrap-social-logo.png"
                    alt="bootstrap-social-logo"
                    border="0"
                    width="55px"
                    heigth="55px"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p>JavaScript</p>
                </td>
                <td>
                  <p>CSS</p>
                </td>
                <td>
                  <p>React JS</p>
                </td>
                <td>
                  <p>Node JS</p>
                </td>
                <td>
                  <p>Bootstrap</p>
                </td>
              </tr>
              <br />
              <br />
              <tr>
                <td>
                  <span className="img2">
                    <img
                      src="https://thumb.ibb.co/mdwKFA/redux.png"
                      alt="redux"
                      border="0"
                      width="55px"
                      heigth="55px"
                    />
                  </span>
                </td>
                <td>
                  <span className="img2">
                    {" "}
                    <img
                      src="https://thumb.ibb.co/dy4FAL/mongodb-logo.png"
                      alt="mongo-db"
                      border="0"
                      width="80px"
                      heigth="80px"
                    />
                  </span>
                </td>
                <td>
                  <span className="img">
                    <i class="fab fa-java fa-5x" />
                  </span>
                </td>
                <td>
                  <img
                    src="https://thumb.ibb.co/dgvWH0/hibernate.png"
                    alt="hibernate"
                    border="0"
                    width="55px"
                    heigth="55px"
                  />
                </td>
              </tr>
              <tr>
                <td>Redux</td>
                <td>Mongo DB</td>
                <td>Java</td>
                <td>Hibernate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Skills;
