import React from "react";
import SkillWrapper from "../SkillWrapper/SkillWrapper";
import Connection from "../Connection/Connection";
import "./CardLower.css";

import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";

const CardLower = () => {
  return (
    <div className="about-wrapper">
      <div>
        <h3 className="about-header">ABOUT ME</h3>
        <p className="about-p">Noniin töihinhän sitä vois</p>
        <br />
        <p className="about-p">Ottakaa töihin pls</p>
      </div>
      <div>
        <h3 className="learning-header">LEARNING A SKILL</h3>
        <SkillWrapper />
        <h3 className="connections-header">CONNECTIONS</h3>
        <Connection
          connectionIcon={githubIcon}
          username="JLaat"
          link="https://github.com/JLaat"
        />
        <Connection
          connectionIcon={linkedinIcon}
          username="Joni Laatikainen"
          link="https://www.linkedin.com/in/joni-laatikainen-a5061a221/"
        />
      </div>
    </div>
  );
};

export default CardLower;
