import React from "react";

interface pillProps {
  color?: string;
  text?: string;
  icon?: string;
}

export const pill: React.FC<pillProps> = ({ color, text, icon }) => {
  return (
    <div
      className="pill"
      style={{
        backgroundColor: color,
        border: "solid black 2px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        width: "calc(20vw + 20px)",
        paddingRight: "10px",
      }}
    >
      <div className="pill-icon"></div>
      <i className={`fa fa-${icon === "plus" ? "plus" : "circle-o"}`} />
      <div className="pill-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default pill;
