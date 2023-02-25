import React from "react";
import "./Connection.css";
import arrowRight from "../../assets/arrow-right.png";

const Connection = (props: any) => {
  return (
    <div className="connection-container">
      <img className="github-icon" src={props.connectionIcon} />
      <h2 className="connection-name">{props.username}</h2>
      <a href={props.link}>
        <img className="arrow-icon" src={arrowRight} alt="arrowi" />
      </a>
    </div>
  );
};

export default Connection;