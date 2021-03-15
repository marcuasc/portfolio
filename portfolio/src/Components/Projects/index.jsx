import React from "react";
import "./index.css";
import webdev from "/Users/marcus/Desktop/nettside/portfolio/portfolio/src/Data/webdev.png";



const Projects = () => {
  return (
      <>
    <div className="flex-row bg-blueGray min-h-screen w-screen transform rotate-rq-8 block p-7">

        <div className=" flex flex-row w-1/2 h-80 rounded-md bg-blue-300 m-auto mb-5 mt-60 " >
        <div className=" flex w-1/2 h-80 rounded-l-md bg-blue-600 " ></div>
        <div className="flex w-1/2 h-80 rounded-r-md bg-blue-600" >
        <img src= {webdev} alt="webdev" className="flex w-full h-80 rounded-r-md " />
        </div>
        </div>

        <div className=" flex flex-row w-1/2 h-80 rounded-md bg-blue-300 m-auto mb-5 mt-32 " >
        <div className=" flex w-1/2 h-80 rounded-l-md bg-blue-600 " ></div>
        <div className="flex w-1/2 h-80 rounded-r-md bg-blue-600" >
        <img src= {webdev} alt="webdev" className="flex w-full h-80 rounded-r-md " />
        </div>
        </div>

        <div className=" flex flex-row w-1/2 h-80 rounded-md bg-blue-300 m-auto mb-5 mt-32 " >
        <div className=" flex w-1/2 h-80 rounded-l-md bg-blue-600 " ></div>
        <div className="flex w-1/2 h-80 rounded-r-md bg-blue-600" >
        <img src= {webdev} alt="webdev" className="flex w-full h-80 rounded-r-md " />
        </div>
        </div>

        <div className=" flex flex-row w-1/2 h-80 rounded-md bg-blue-300 m-auto mb-5 mt-32 " >
        <div className=" flex w-1/2 h-80 rounded-l-md bg-blue-600 " ></div>
        <div className="flex w-1/2 h-80 rounded-r-md bg-blue-600" >
        <img src= {webdev} alt="webdev" className="flex w-full h-80 rounded-r-md " />
        </div>
        </div>
    </div>
    </>
  );
}

export default Projects;