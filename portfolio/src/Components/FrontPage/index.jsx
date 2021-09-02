import React from "react";
import "./index.css";
import Menu from "../Menu/index";
import Typewriter from "typewriter-effect";
import Portrait from "../../Data/portrait.jpg";
import { motion } from "framer-motion";
import ScrollDown from "../ScrollDown/index";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const FrontPage = () => {
  return (
    <div
      className="flex-row bg-whiteB min-h-screen w-screen block"
      id="frontpage"
    >
      <Menu></Menu>

      <div className="w-3/4 h-3/4  m-20 mt-10 ml-40  rounded-xl p-6 font-undertitle text-3xl text-midnightG  z-10 absolute">
        <h1 className=" font-title text-5xl font-bold mb-5">
          Hei! Jeg er Marcus Schrøder
        </h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2500)
              .typeString("Informatikkstudent")
              .pauseFor(1000)
              .deleteChars(20)
              .typeString("Frontendutvikler")
              .pauseFor(1000)
              .deleteChars(20)
              .typeString("Surfeglad toppturentusiast")
              .pauseFor(1000)
              .deleteChars(30)
              .typeString("Pizzaiolo wannabe")
              .pauseFor(1000)
              .deleteChars(30)
              .typeString("Informatikkstudent")
              .start();
          }}
        />

        <p className=" text-lg w-2/4 mt-7 font-paragraph text-black ">
          Jeg er Marcus og går 4.klasse på en master i informatikk med
          spesialisering innenfor programvaresystemer.
          <br /> <br />
          På denne siden har jeg samlet hobby- og skoleprosjekter jeg har jobbet
          med i løpet av studietiden. Gjennom diverse prosjekter har jeg fått
          erfaring med blant annet Typescript, React, Javascipt, HTML5, CSS,
          MongoDB, Express, Node, Java og Python.
          <br /> <br />
          Ved siden av studiet jobber jeg deltid som systemutvikler hos Opoint
          Technologies med ansvar for utviklingen av et internt
          feilsøkingsverktøy for Infomedia sitt supportteam.
          <br /> <br />
          <b>Nettsiden er under utvikling.</b>
        </p>

        <div className=" flex  h-1/3 w-1/4  mt-8 justify-between">
          <a href="https://github.com/marcuasc">
            <FaGithubSquare size={45} />
          </a>

          <a href="https://www.linkedin.com/in/marcus-schr%C3%B8der/">
            <FaLinkedin size={45} />
          </a>

          <a href="https://www.instagram.com/marcusscr/">
            <FaInstagramSquare size={45} />
          </a>
        </div>
      </div>

      <motion.img
        src={Portrait}
        alt="portrait"
        className=" w-2/6  mt-3.5 left-1/2  absolute opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      />

      <ScrollDown />
    </div>
  );
};

export default FrontPage;
