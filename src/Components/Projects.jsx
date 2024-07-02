import React from "react";
import ProjectBox from "./ProjectBox";
import EcommerceImage from "../images/Ecommerce.png";
import DeltaImage from "../images/Delta.png";
import ChatGptImage from "../images/ChatGpt.png";
import Spotify from "../images/Spotifyimage.png";
import CouponGenerator from "../images/CouponGenerator.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My Projects
      </h1>
      <div 
      className="project">
        <ProjectBox projectPhoto={DeltaImage} projectName="VirtualAssistant" />
        <ProjectBox projectPhoto={ChatGptImage} projectName="PersonalChatGpt" />
        <ProjectBox projectPhoto={EcommerceImage} projectName="ECommerceWebsite" />
        <ProjectBox projectPhoto={Spotify} projectName="Spotify" />
        <ProjectBox projectPhoto={CouponGenerator} projectName="CouponGenerator" />
        </div>
    </div>
  );
};

export default Projects;
