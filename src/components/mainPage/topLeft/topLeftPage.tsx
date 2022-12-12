import React, { Component } from "react";
import "./topLeftPage.css";

export default class topLeftPage extends Component {
  render() {
    return (
      <div className="top-left-section">
        <div className="heading">
          Keep your business organized in just one application
        </div>
        <div className="subHeading">
          Bill with downloadable statistics, measure profitability, manage team
          workloads, manage budgets and track performance.
        </div>
        <div className="buttons">
          <div className="try">Try for free</div>
          <div className="learn">Learn more</div>
        </div>
      </div>
    );
  }
}
