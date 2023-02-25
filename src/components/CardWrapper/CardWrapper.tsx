import React from "react";
import "./CardWrapper.css";
import CardUpper from "../CardUpper/CardUpper";
import CardLower from "../CardLower/CardLower";

const CardWrapper = () => {
  return (
    <div className="card-wrapper">
      <CardUpper />
      <CardLower />
    </div>
  );
};

export default CardWrapper;
