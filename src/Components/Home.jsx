import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.gif";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import Skills from "./Skills.jsx";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1></h1>
          <span className="tagline">Hello!! Welcome to my Portfolio</span>
          <h1>I'M Sagar Kumar Jha</h1>
          <Type />
          <h3>MERN STACK DEVELOPER</h3>
          <h3>ENTERPRENEUR ( Founder @LIMEWEAR)</h3>
          <h3>OPEN SOURCE CONTRIBUTOR (Contributor in Caffine n code, GSSOC'24) </h3>
          <h3>GOOGLE DEVELOPMENT STUDENT CLUB (ADGIPS)</h3>
          <h3>TOP 10 IN 15+ HACKATHONS</h3>
          <h3>ARTIFICICAL INTELLIGENCE - DATA SCIENCE</h3>
          <h3>ACTIVELY ENGAGE IN COMPETITIVE PROGRAMMING</h3>
         
          <Link to="/About">
            <button>
              About Me
              <BsPerson />
            </button>
          </Link>

          <Link to="/Contact">
            <button>
              Contact <CgPhone />
            </button>
          </Link>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
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

export default Home;
 