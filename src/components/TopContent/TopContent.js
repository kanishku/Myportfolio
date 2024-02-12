import React from "react";
import "./TopContent.css";
import { fadeInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Link } from "react-scroll";

const styles = {
  fadeInLeft: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
};

const TopContent = ({ setSelected }) => {
  return (
    <StyleRoot>
      <div className="topContent" style={styles.fadeInLeft}>
        <div className="topContent__container">
          <h1>KANISH KUMAR K U</h1>
          <p>I'M FULL STACK DEVELOPER</p>
          <a
            href="https://drive.google.com/file/d/1BwrxUQSpTPPiy0axMAbI1a9N9dgS-Uii/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="topContent__downloadButton">Download CV</button>
          </a>
          <Link to="projects" smooth={true} duration={500}>
            <button
              className="topContent__workButton"
              onClick={() => setSelected("projects")}
            >
              My Work
            </button>
          </Link>
        </div>
      </div>
    </StyleRoot>
  );
};

export default TopContent;
