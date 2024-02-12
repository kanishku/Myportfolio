import React from "react";
import { Element } from "react-scroll";
import Experience from "../ExperienceBox/Experience";
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="experienceContainer__info">
        <Experience type="Fresher" title="  MEA(R)N STACK DEVELOPER INTERN(LUMINAR )" />
        <Experience
          number=""
          title="Dedicated Professional."
          style={{ backgroundColor: "#f64c08" }}
        />
        <Experience number="" title="Skill Development" />
        <Experience number="" title="Collaborative Team Player:" />
      </div>
    </Element>
  );
};

export default ExperienceContainer;
