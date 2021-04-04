import React from "react";
import "./index.css";
import { FaLinkedin } from "react-icons/fa";
import { ImMail } from "react-icons/im";

const Footer = () => {
  return (
    <div className="flex flex-col max-w-screen-2xl w-screen bg-whiteB h-96 mt-10 z-30">
      <h1
        className="m-auto text-midnightG text-4xl font-bold font-undertitle mb-4 mt-20"
        id="kontakt"
      >
        Kontakt
      </h1>
      <p className=" m-auto font-bold  font-paragraph mb-10 ">
        Vil du ta kontakt, er det bare å sende en melding på Linkedin eller
        mailen som står under.
      </p>
      <div className=" flex  h-1/2 w-1/5 m-auto justify-between mb-96">
        <a href="https://www.linkedin.com/in/marcus-schr%C3%B8der/">
          <FaLinkedin size={70} />
        </a>

        <a href="mailto:marcus.anton.schroder@gmail.com">
          <ImMail size={70} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
