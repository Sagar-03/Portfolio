import React from "react";
import { FaFileDownload } from "react-icons/fa";
import MyPhoto from "../images/Photo.jpg";

const About = () => {
  return (
    <div className="AboutPage">
      <div className="AboutText">
        <h1 className="AboutTextHeading">
          Get to <b>know</b> me!
        </h1>
        <p>
          Hi, my name is Sagar Kumar jha I'm a MERN Stack Developer
          Pursuing B.Tech in Computer Science From IP University.
          <br />
          Innovative Software Engineer | Entrepreneur | MERN Stack Developer | Intern @SAG-DRDO<br />
          Eager to pioneer solutions at the intersection of technology and entrepreneurship.
          Specializing in MERN stack development and driven by a relentless pursuit of knowledge.

          <br />
          Love to create projects with beautiful designs and put my own
          twists on it, you can check out some of my work in the projects
          section.
          <br />
          Trying to make "Hello World" the new "abc";
          <br />
          Technology excites me and I am always in awe of the change it drives in the world.<br /> Certain skills that I have worked with include Data Structures and Algorithms (C++) , MERN Stack.
          <br />
          And what I might lack in skills I make up for with my determination to learn.
          <br />
          Outside of tech, I am a Enterpreneur and dedicated to turning big ideas into successful businesses and making a difference in the industry.

          <br />I am open to new collaborations or work where I can
          contribute and grow. Feel free to connect with me, links are in the
          footer.
          <br />
        </p>
        {/* <a href= "https://drive.google.com/file/d/1S5yMIjOeF2HR9Wx4wkRFXhB0gnRFlHKk/view?usp=sharing" download className="resume-btn">
          <button>
            View Resume <FaFileDownload></FaFileDownload>
          </button>
        </a> */}
      </div>
      <div>
        <img src={MyPhoto} alt="Sagar Kumar jha" className="CircularPhoto" />
      </div>
    </div>
  );
};

export default About;