import React, { Component } from "react";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="contact" />
        <div className="info">
          <h1 className="contact-heading">You can reach me out at</h1>
          <table>
            <tbody>
              <tr>
                <td className="td-left">
                  <i class="fa fa-envelope fa-2x" aria-hidden="true" />
                </td>
                <td className="td-left">varshant.kumar1@wipro.com</td>
              </tr>
              <tr>
                <td className="td-left">
                  <i class="fa fa-mobile fa-2x" aria-hidden="true" />
                </td>
                <td className="td-left">+919149029004</td>
              </tr>
              <tr>
                <td className="td-left">
                  <h4>CONNECT WITH ME</h4>
                </td>
                <td className="td-left">
                  <a href="https://www.linkedin.com/in/varshant-deshwal/">
                    {" "}
                    <span className="socialIconsContact">
                      <i class="fab fa-linkedin" />
                    </span>
                  </a>
                  <a href="https://www.facebook.com/vrover.deshwal">
                    <span className="socialIconsContact">
                      <i class="fab fa-facebook-square" />
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Contact;
