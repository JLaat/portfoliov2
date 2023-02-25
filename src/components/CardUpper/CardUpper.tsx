import React from "react";
import "./CardUpper.css";

const CardUpper = () => {
  return (
    <div className="wrapper">
      <div className="nice-bg"></div>
      <div className="profile-photo">
        <div className="status-ball"></div>
      </div>
      <h2 className="my-name">
        Joni<b>#dev</b>
      </h2>
    </div>
  );
};

export default CardUpper;
