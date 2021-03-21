import React from "react";
import "./index.css";
import {FaGithubSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";



const Footer = () => {
  return (
    <div className = "flex flex-col max-w-screen-2xl w-screen bg-whiteB h-96 z-30">
      <div className = " flex  h-1/2 w-1/2 m-auto justify-between " > 

      <a href="https://github.com/marcuasc">
      <FaGithubSquare size={70} />
      </a>

      <a href="https://www.linkedin.com/in/marcus-schr%C3%B8der/" >
        <FaLinkedin size={70}/>
      </a>

      <a href="https://www.instagram.com/marcusscr/">
        <FaInstagramSquare size={70} />
      </a>
      </div>
    </div>

  );
}

export default Footer;