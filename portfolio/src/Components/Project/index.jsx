import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

/*const COLORS = {
    green: "text-white bg-green-400 hover:bg-green-500",
    red: "text-white bg-red-400 hover:bg-red-500"
  };*/

const Project = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className=" flex flex-row w-3/5 h-72 rounded-lg m-auto mb-5 mt-28 shadow-2xl"
    >
      <div className=" flex flex-col w-1/2 h-72 rounded-l-lg border-indigo-100 p-8 bg-white">
        <div className="uppercase tracking-wide text-2xl text-black font-undertitle font-bold ">
          {props.title}
        </div>
        <p className=" font-semibold mt-5 font-paragraph ">
          {" "}
          {props.description}{" "}
        </p>
        <br />
        <div className=" flex flex-row justify-between w-1/3">
          <a
            style={props.style}
            href={props.link}
            className="text-midnightG -top-0.5 relative"
          >
            <FaExternalLinkAlt size={45} />
          </a>
          <a
            href={props.link2}
            style={props.style}
            className="text-midnightG ml-3"
          >
            <FaGithubSquare size={45} />
          </a>
        </div>
      </div>
      <div className="flex w-1/2 h-72 rounded-r-md object-contain ">
        <img
          src={props.img}
          alt="Prosjekt-bilde"
          className="flex w-full h-72 rounded-r-md transition duration-150 ease-in-out hover:opacity-90 "
        />
      </div>
    </motion.div>
  );
};

export default Project;
