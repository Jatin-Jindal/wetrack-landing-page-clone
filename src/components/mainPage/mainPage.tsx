import React, { Component } from "react";
import { BottomLeft } from "./bottomLeft";
import { RightPage } from "./right";
import { TopLeft } from "./topLeft";
import "./mainPage.css";

export default class mainPage extends Component {
  render() {
    return (
      <div className="mainPage">
        <TopLeft />
        <BottomLeft />
        <RightPage />
      </div>
    );
  }
}
