import React from "react";
import Project from "../../components/Project/Project";
import {
  pastPhotos,
  ongoingPhotos,
  pastProjects,
  ongoingProjects,
} from "./project_data";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="page-projects">
      <div className="top">
        <h1 className="header-page">projects:jlaat</h1>
      </div>
      <div className="bottom">
        <h2 className="header-projects">ongoing projects</h2>
        {ongoingProjects.map((project, index) => {
          return (
            <Project
              title={project.title}
              date={project.date}
              description={project.description}
              projectImg={ongoingPhotos[index]}
              techs={project.techs}
              githubLink={project.githubLink}
            />
          );
        })}
        <h2 className="header-projects">finished</h2>
        {pastProjects.map((project, index) => {
          return (
            <Project
              title={project.title}
              date={project.date}
              description={project.description}
              projectImg={pastPhotos[index]}
              techs={project.techs}
              githubLink={project.githubLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
