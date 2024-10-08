import React from "react";
import Header from "../components/Portfolio/header";
import PersonalProjects from "../components/Portfolio/PersonalProjects";
import TeamProjects from "../components/Portfolio/TeamProjects";

const Portfolio = () => {
  return (
    <div className="">
      <Header />
      <PersonalProjects />
      <TeamProjects />
    </div>
  );
};

export default Portfolio;
