import React, { Component } from "react";
import "./botLeftPage.css";

export default class botLeftPage extends Component {
  render() {
    const companies = [
      "thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
      "thumb/3/35/Pinterest_Logo.svg/1200px-Pinterest_Logo.svg.png",
      "thumb/c/ca/Walmart_logo.svg/1280px-Walmart_logo.svg.png",
      "thumb/7/7b/Zoom_Communications_Logo.svg/1280px-Zoom_Communications_Logo.svg.png",
      "thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
      "thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
      "thumb/3/39/PayPal_logo.svg/1280px-PayPal_logo.svg.png",
      "a/a9/Amazon_logo.svg",
    ];
    return (
      <div className="bottom-left-section">
        <div className="heading">
          <div className="headingText">Trusted by the greatest</div>
        </div>
        <div className="logos">
          {companies.map((item, index) => (
            <img
              className="logo"
              src={`https://upload.wikimedia.org/wikipedia/commons/${item}`}
              alt="logo"
              key={index}
              style={{
                maxHeight: "40px",
                filter: "brightness(0)",
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
