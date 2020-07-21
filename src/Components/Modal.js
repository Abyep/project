import React, { Component } from "react"
import "./modal.css"

class Modal extends Component {
  render() {
    return (
      <div
        className="modal-parent-div"
        style={{ display: this.props.showModal ? "flex" : " none" }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div align="right">
            <img className="avatar" src={this.props.user.avatar} />
          </div>
          <div className="modal-details-div">
            <div>
              {" "}
              Name :{" "}
              {this.props.user.first_name + " " + this.props.user.last_name}
            </div>
            <div>Email : {this.props.user.email}</div>
            <div>
              {" "}
              JD: As a Front End Developer, you will be responsible for
              implementing visual elements that are visible from the computer
              users vantage point within a web application. You will combine the
              art of design with the science of programming. You will be
              responsible for the translation of UI/UX design wireframes to
              actual code.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
