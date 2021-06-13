import React from "react";
import TerminalText from '../terminalText/terminal-text';
import "./about.scss";

const AboutComponent = props => (
  <div className="container">
    <h1>Profile</h1>
    
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
        }}>
        <TerminalText className='sub-type-txt'>
          Developer, Programmer, Problem Solver!
        </TerminalText>
      </div>

    <p className="sub_title" />
    <div id="about">
      <div className="about_item">
        <h2>About Me</h2>
        <p>
          My name is Thomas Pearson. I'm a Full-stack developer from Auckland, New Zealand
          currently living in London. Thats has a passion for developing and creating
          innovative and elegant solutions. I love to learn and embrace the newest
          technologies, languages and frameworks.
        </p>
      </div>

      <div className="about_img">
        <img src="/images/me.png" alt="Me" />
      </div>

      <div className="about_item">
        <h2>Education</h2>
        <p>
          I majored in Computer Science with a minor in Information Technology
          from Massey University. I've gained commercial experience working on
          Android applications as a Full Stack Developer using Agile Scrum, AWS
          Dynamo and AWS Lambda.
        </p>
      </div>
    </div>
  </div>
);

export default AboutComponent;
