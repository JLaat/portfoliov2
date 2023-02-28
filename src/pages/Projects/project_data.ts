import CvPhoto from "../../assets/project-photos/cvproject.png";
import WeatherPhoto from "../../assets/project-photos/weather-app.png";
import CalculatorPhoto from "../../assets/project-photos/calculator.png";
import KalakaveriPhoto from "../../assets/project-photos/kalakaveri.png";
import PortfolioV2Photo from "../../assets/project-photos/portfoliov2.png";

interface Project {
  title: string;
  date: string;
  description: string;
  techs: string[];
  githubLink: string;
}

// Export photos to use them as props later on
export const ongoingPhotos = [KalakaveriPhoto, PortfolioV2Photo];
export const pastPhotos = [CvPhoto, WeatherPhoto, CalculatorPhoto];

export const ongoingProjects: Project[] = [
  {
    title: "Kalakaveri",
    date: "01/2023",
    description: "Fishing application made for personal and learning purposes",
    techs: ["Angular", "TypeScript"],
    githubLink: "https://github.com/JLaat/kalakaveri-spring-boot",
  },
  {
    title: "PortfolioV2",
    date: "03/2023",
    description: "New portfolio made with React and TypeScript",
    techs: ["React", "TypeScript"],
    githubLink: "https://github.com/JLaat/portfoliov2",
  },
];

export const pastProjects: Project[] = [
  {
    title: "CV Maker",
    date: "12/2022",
    description: "Application for making resume by using a ready template.",
    techs: ["React", "TypeScript"],
    githubLink: "https://github.com/JLaat/cv-project",
  },
  {
    title: "Weather App",
    date: "02/2021",
    description: "Application for checking weather in different cities",
    techs: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/JLaat/weather-app",
  },
  {
    title: "Calculator",
    date: "01/2021",
    description: "Calculator made with JavaScript",
    techs: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/JLaat/Calculator",
  },
];

export {};
