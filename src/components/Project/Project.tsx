import React from "react";
import "./Project.css";
import githubIcon from "../../assets/icons/github-green.png";

const Project = (props: any) => {
  return (
    <div className="container-project">
      <div className="left-project">
        <h2 className="header-project">{props.title}</h2>
        <img src={props.projectImg} className="project-img" />
      </div>
      <div className="right-project">
        <div className="upper-right">
          <h3 className="project-date">{props.date}</h3>
          <a href={props.githubLink}>
            <img src={githubIcon} />
          </a>
        </div>
        <p className="project-description">{props.description}</p>
        <ul className="list-techs">
          <h3 className="header-techs">Techs: </h3>
          {props.techs.map((tech: string) => {
            return <li className="tech">{tech}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Project;
