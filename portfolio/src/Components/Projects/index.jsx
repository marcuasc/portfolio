import React from "react";
import "./index.css";
import webdev from "../../Data/webdev.png";
import smartHome from "../../Data/Smart_home.png";
import ProjectComponent from "../Project/index";

const Projects = () => {
  return (
    <>
      <div className="flex-row bg-whiteB min-h-screen w-screen transform rotate-rq-8 block p-7">
        <div className="flex flex-col w-1/5 h-8 m-auto mt-40 justify-center font-bold font-undertitle p-8 text-5xl rounded-md">
          <h1 className="m-auto text-midnightG">Prosjekter</h1>
        </div>
        <ProjectComponent
          title="Filmdatabase"
          description="I emnet IT2810 utviklet jeg og 2 andre studenter en filmdatabase basert på MERN-stacken."
          img={webdev}
          className=" bg-red-700"
        />
        <ProjectComponent
          title="Smarthus"
          description="Som en informatikkstudent som er overglad i teknologi, har jeg prøvd å digitalisere mye av det som kan i kollektivet mitt. Jeg bruker Home assistant som kjører på en Raspberry Pi."
          img={smartHome}
        ></ProjectComponent>
      </div>
    </>
  );
};

export default Projects;
