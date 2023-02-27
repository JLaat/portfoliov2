import React from "react";
import "./SkillWrapper.css";
import codeIcon from "../.././assets/icons/coding.png";

const SkillWrapper = () => {
  const startingDate: Date = new Date(2021, 8, 23, 0, 0);
  const currentDate: Date = new Date();
  const timeDiff: number = currentDate.getTime() - startingDate.getTime();
  const daysElapsed: number = Math.floor(timeDiff / (1000 * 3600 * 24));

  return (
    <div className="skillWrapper">
      <img src={codeIcon} alt="codeIcon" className="skill-icon" />
      <h3 className="skill-information">
        CODING <br /> <b>{daysElapsed} days elapsed</b>
      </h3>
    </div>
  );
};

export default SkillWrapper;
