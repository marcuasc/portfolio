import React from "react";
import "./index.css";
import {motion} from "framer-motion";



/*const COLORS = {
    green: "text-white bg-green-400 hover:bg-green-500",
    red: "text-white bg-red-400 hover:bg-red-500"
  };*/


const Project = (props) => {
  return (
    
        <motion.div initial={{opacity:0, y:30}} animate={{ opacity:1, y:0}} transition={{delay:0.5 , duration:0.5}} className=" flex flex-row w-3/5 h-96 rounded-lg bg-indigo-400 m-auto mb-5 mt-32 shadow-2xl" >
        <div className=" flex flex-col w-1/2 h-96 rounded-l-lg border-indigo-100 p-8 bg-seaweed" >
        <div className="uppercase tracking-wide text-2xl text-black font-semibold">{props.title}</div>
        <p className ="  font-semibold mt-5 " > {props.description} </p>
        <br/>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-blue-400 border-black  hover:bg-blue-700 text-white font-bold font-mo py-2 px-4 rounded-full w-8/12 m">
          View Project
        </motion.button>
        </div>
        <div className="flex w-1/2 h-80 rounded-r-md " >
        <img src= {props.img} alt="webdev" className="flex w-full h-96 rounded-r-md " />
        </div>
        </motion.div>
  );
}

export default Project;