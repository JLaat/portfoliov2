import React from "react";
import "./Home.css";
import Menu from "../../components/Menu/Menu";
import CardWrapper from "../../components/CardWrapper/CardWrapper";

const Home = () => {
  return (
    <div className="page-home">
      <CardWrapper />
      <Menu />
    </div>
  );
};

export default Home;
