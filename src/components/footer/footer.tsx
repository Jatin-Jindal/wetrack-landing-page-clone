import React, { Component } from "react";
import "./footer.css";
import Pill from "./pill";

export default class footer extends Component {
  pills = [
    {
      text: "Create AM-5 Wireframes",
      color: "#FFFFFF",
      icon: "circle",
    },
    {
      text: "Create AM-5 Wireframes",
      color: "#FFFFFF",
      icon: "circle",
    },
    {
      text: "Update BE-1 Userflow",
      color: "#FFFFFF",
      icon: "circle",
    },
    {
      text: "Platform Structure",
      color: "#E9AFFC",
      icon: "circle",
    },
    {
      text: "Design System",
      color: "#534FFF",
      icon: "circle",
    },
    {
      text: "5 more tasks",
      color: "#5CD669",
      icon: "plus",
    },
  ];
  render() {
    return (
      <div className="footer">
        <div className="footer-items">
          {this.pills.map(({ text, color, icon }) => (
            <Pill text={text} color={color} icon={icon} />
          ))}
        </div>
      </div>
    );
  }
}
