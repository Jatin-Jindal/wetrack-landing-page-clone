import React, { Component } from "react";
import "./rightPage.css";

export default class rightPage extends Component {
  render() {
    return (
      <div className="right-section">
        <div className="pill pill1">
          <div className="brief-detail">
            <p>AMAZON PROJECT</p>
            <p>TUE, 30 AUG</p>
          </div>
          <div className="title">Architecture Analysis</div>
          <div className="icons">
            <div className="pause-stop">
              <i className="fa fa-pause" />
              <i className="fa fa-stop" />
            </div>
            <div className="time">1:38:47</div>
          </div>
        </div>
        <div className="pill pill2">
          <div className="brief-detail">
            <p>EMPLOYEE</p>
          </div>
          <div className="title">Leonard Lauren</div>
          <div className="footer">
            <div className="total">
              <p className="TOTAL">TOTAL</p>
              <p className="Billable">Billable</p>
            </div>
            <div className="col2">
              <p className="row1">48:00</p>
              <p className="row2">42:00</p>
            </div>
            <div className="col3">
              <p className="row1">3,150 USD</p>
              <p className="row2">3,150 USD</p>
            </div>
          </div>
          <div className="profilePic">
            <img
              src="https://cdn7.dissolve.com/p/D430_47_969/D430_47_969_1200.jpg"
              alt="profile"
            />
          </div>
        </div>
        <div className="pillStack">
          <div className="pill pill3">
            <div className="brief-detail">
              <p style={{ color: "#000000", backgroundColor: "#e7adf5" }}>
                Design
              </p>
              <p style={{ color: "#8d8d8d", backgroundColor: "#f1f1f1" }}>
                3 tasks
              </p>
            </div>
            <div className="tasks">
              <div className="task">
                <i className="fa fa-circle-o" />
                <p>Design System</p>
                <p>27:40:12</p>
              </div>
              <div className="task">
                <i className="fa fa-circle-o" />
                <p>Platform Structure</p>
                <p>34:28:35</p>
              </div>
              <div className="task">
                <i className="fa fa-circle-o" />
                <p>Design Review</p>
                <p>19:35:54</p>
              </div>
            </div>
          </div>
          <div className="pill pill4" id="pillOverlap">
            <div className="brief-detail">
              <p style={{ color: "#000000", backgroundColor: "#5cd669" }}>
                Front End
              </p>
              <p style={{ color: "#8d8d8d", backgroundColor: "#f1f1f1" }}>
                3 tasks
              </p>
            </div>
            <div className="tasks">
              <div className="task">
                <i className="fa fa-circle-o" />
                <p>Design System</p>
                <p>27:40:12</p>
              </div>
              <div className="task">
                <i className="fa fa-circle-o" />
                <p>Platform Structure</p>
                <p>34:28:35</p>
              </div>
              <div className="task">
                <i className="fa fa-circle-o" />
                <p>Design Review</p>
                <p>19:35:54</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
