import React from "react";
import "./index.css";
import webdev from "../../Data/webdev.png";
import ProjectComponent from "../Project/index";


const Projects = () => {
  return (
      <>
    <div className="flex-row bg-whiteB min-h-screen w-screen transform rotate-rq-8 block p-7">

      <div className="flex flex-col w-1/5 h-8 m-auto justify-center bg-red-300 p-8 text-3xl rounded-md" >
        <h1 className="m-auto" >Prosjekter</h1>
        </div>
        <ProjectComponent title="test"  description="Dette er en test fro komponenten projectDette er en test fro komponenten project Dette er en test fro komponenten projectDette er en test fro komponenten project" img={webdev} className=" bg-red-700" />
    </div>
    </>
  );
}

export default Projects;