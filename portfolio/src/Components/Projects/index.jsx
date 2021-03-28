import React from "react";
import "./index.css";
import webdev from "../../Data/png2jpg/webdev-min.jpg";
import smartHome from "../../Data/png2jpg/Smart_home.jpg";
import webtek from "../../Data/png2jpg/webteknologi.jpg";
import webdev2 from "../../Data/png2jpg/webdev2.jpg";
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
          link={"http://it2810.marcusas.no/"}
        />
        <ProjectComponent
          title="Smarthus"
          description="Som en informatikkstudent som er overglad i teknologi, har jeg prøvd å digitalisere mye av det som kan i kollektivet mitt. Jeg bruker Home assistant som kjører på en Raspberry Pi."
          img={smartHome}
        />
        <ProjectComponent
          title="Interaktiv galleri"
          description="Nullam commodo ipsum eu purus cursus egestas. Vivamus ipsum dui, malesuada sit amet urna id, imperdiet malesuada ante."
          img={webdev2}
          link={"https://webdeb-2.netlify.app/"}
        />
        <ProjectComponent
          title="Fiktiv restaurant"
          description="Som en informatikkstudent som er overglad i teknologi, har jeg prøvd å digitalisere mye av det som kan i kollektivet mitt. Jeg bruker Home assistant som kjører på en Raspberry Pi."
          img={webtek}
          link={"https://webteknologi.netlify.app/"}
        />
      </div>
    </>
  );
};

export default Projects;
