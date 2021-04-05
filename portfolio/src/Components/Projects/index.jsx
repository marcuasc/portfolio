import React from "react";
import "./index.css";
import webdev from "../../Data/png2jpg/webdev-min.jpg";
import smartHome from "../../Data/smart_home2.png";
import webtek from "../../Data/webtek.png";
import webdev2 from "../../Data/webdev22.png";
import ProjectComponent from "../Project/index";

const display = { display: "none" };

const Projects = () => {
  return (
    <>
      <div
        className="flex-row bg-whiteB min-h-screen w-screen transform rotate-rq-8 block p-7"
        id="projects"
      >
        <div className="flex flex-col w-1/5 h-8 m-auto mt-20 justify-center font-bold font-undertitle p-8 text-5xl rounded-md">
          <h1 className="m-auto text-midnightG">Prosjekter</h1>
        </div>
        <ProjectComponent
          title="Filmdatabase"
          description="I emnet IT2810 utviklet jeg og 2 andre studenter en filmdatabase laget med Typescript, MongoDB, Express, React og Node."
          img={webdev}
          link={"http://it2810.marcusas.no/"}
          link2={"https://github.com/marcuasc/Webutvikling"}
        />

        <ProjectComponent
          title="Interaktiv galleri"
          description="Interaktivt galleri laget med Typescript og React. Ved å endre på sliderne vil lyd, bilde, farger og dikt variere."
          img={webdev2}
          link={"https://webdeb-2.netlify.app/"}
          link2={"https://github.com/marcuasc/Webutvikling-2"}
        />

        <ProjectComponent
          title="Smarthus"
          description="Som en informatikkstudent som er overglad i teknologi, har jeg prøvd å automatisere kollektivet mitt. Jeg bruker Home assistant som kjører på en Raspberry Pi. Alle ovner med hensyn til tempratur, vær og strømpris. Lamper, høytalere og chromecaster blir også brukt til automatisering. Pågående prosjekt!"
          img={smartHome}
          style={display}
        />
        <ProjectComponent
          title="Fiktiv restaurant"
          description=" I emnet webteknologi utviklet jeg, og 5 andre studenter en nettside for en fiktiv restaurant. Nettsiden er laget med HTML5, CSS og Javascript."
          img={webtek}
          link={"https://webteknologi.netlify.app/"}
          link2={"https://github.com/marcuasc/Webteknologi"}
        />
      </div>
    </>
  );
};

export default Projects;
