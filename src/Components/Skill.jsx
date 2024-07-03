import React from 'react';
import Skills from "./Skills.jsx"; // Ensure this import is correct

const SkillSet = () => {
  return (
    <div>
      <h1 className="SkillsHeading">Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Figma" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="C++" />
        <Skills skill="Npm" />
        <Skills skill="MongoDB" />
        <Skills skill="NodeJs" />
        <Skills skill="MySQL" />
        <Skills skill="Python" />
      </div>
    </div>
  );
};

export default SkillSet;