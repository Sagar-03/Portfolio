import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.gif";


const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1></h1>
          <span className="tagline">Hello!! Welcome to my Portfolio</span>
          <h1>I'M Sagar Kumar Jha</h1>
          <Type />
          <ul>
    <li className="s">Intern @SAG-DRDO (Defence Research and Development Organisation)</li>
    <li className="s">Open Source Contributor (Contributor in Caffine n code, GSSOC'24)</li>
    <li className="s">Top 10 in 15+ Hackathons</li>
    <li className="s">Entrepreneur (Founder @LIMEWEAR)</li>
    <li className="s">Google Developer Student Club (ADGIPS)</li>
    <li className="s">MERN Stack Developer</li>
    <li className="s">Artificial Intelligence - Data Science</li>
    <li className="s">Actively Engage in Competitive Programming</li>
</ul>

         
          {/* <Link to="/About">
            <button>
              About Me
              <BsPerson />
            </button>
          </Link>

          <Link to="/Contact">
            <button class = "connect">
              Contact<CgPhone />
            </button>
          </Link>

          <Link to="/Skills">
            <button class = "connect">
              Skills<CgPhone />
            </button>
          </Link> */}

        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
      <br />

      
    </div>
  );
};

export default Home;
 