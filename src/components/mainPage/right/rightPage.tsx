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
        <div className="pillStack">
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
          <div className="pill pill1" id="pillOverlap">
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
        </div>
      </div>
    );
  }
}
