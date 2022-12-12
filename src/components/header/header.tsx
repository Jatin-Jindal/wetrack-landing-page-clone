import React, { Component } from "react";
import headerIcon from "./headerIcon.png";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="components">
          <div className="logoMenu">
            <div className="logo">
              <img
                src={headerIcon}
                alt="header icon"
                style={{ maxHeight: "50px", maxWidth: "50px" }}
              />
            </div>
            <div className="Menu">
              {[
                "Product",
                "Key Features",
                "Why Wetrack",
                "Applications",
                "Careers",
                "Pricing",
              ].map((item, index) => {
                return (
                  <div className="menu-item" key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="finalButtons">
            <img
              className="ellipsis"
              src="https://img.icons8.com/ios/50/000000/ellipsis.png"
              alt="ellipsis"
              style={{ maxHeight: "50px", maxWidth: "50px" }}
            />
            <div className="login">Login</div>
            <div className="try">Try for free</div>
          </div>
        </div>
      </div>
    );
  }
}
