import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    
      ECommerceWebsiteDesc: "Dynamic e-commerce platform offering a seamless shopping experience with intuitive navigation, diverse product selection, and efficient checkout. Designed for modern retail, it boosts customer engagement and drives sales effectively.",
      ECommerceWebsiteGithub:  "https://github.com/Sagar-03/New-Ecommerce",
      ECommerceWebsiteWebsite: "https://new-ecommerce-delta.vercel.app/",
    

      VirtualAssistantDesc:
      "Developed a versatile AI-driven virtual assistant, DELTA, that offers natural conversations, task management, multilingual support, and customizable responses, enhancing user productivity and engagement." ,
      VirtualAssistantGithub: "https://github.com/Sagar-03/ChatBot-Assistance",
      VirtualAssistantWebsite: "https://chat-bot-assistant-beige.vercel.app/",

      PersonalChatGptDesc:
      "Explore our AI-powered chatbot platform, revolutionizing customer interactions with advanced natural language processing, personalized responses, and seamless integration, boosting efficiency and enhancing user experience. Discover the future of intelligent communication.",
      PersonalChatGptGithub: "https://github.com/Sagar-03/AIchatgpt",
      PersonalChatGptWebsite: "https://chat-gpt-five-teal.vercel.app/",

      SpotifyDesc:
      "Created a functional Spotify clone using HTML, CSS, and JavaScript, allowing users to play and enjoy music seamlessly. The interface is intuitive, providing a smooth listening experience." ,
      SpotifyGithub: "https://github.com/Sagar-03/spotify",
      SpotifyWebsite: "https://spotify-inky-beta.vercel.app/",

      CouponGeneratorDesc:
      "Designed to create and manage unique coupon codes with customizable parameters. Users can specify the format, length, expiration date, and discount amount for each coupon generated. The project provides a responsive web interface for easy accessibility from various devices.",
      CouponGeneratorGithub: "https://github.com/Sagar-03/Coupon-Generator",
      CouponGeneratorWebsite: "https://coupon-generator-xi.vercel.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
