import React from "react";
import "./index.css";
import webdev from "../../Data/png2jpg/webdev-min.jpg";
import smartHome from "../../Data/smart_home2.jpeg";
import webtek from "../../Data/webtek.jpeg";
import webdev2 from "../../Data/webdev22.jpeg";
import ProjectComponent from "../Project/index";
import mooncoins from "../../Data/mooncoins.jpeg";
import portfolio from "../../Data/portfolio.jpeg";

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
          title="Cryptovaluta"
          description="Som et hobbyprosjekt har jeg lagd en nettside der man kan legge inn diverse cryptovaluta og få en oversikt over alle prisene. Prisene blir hentet med cryptocompare.com sitt API. Nettsiden er bygd med MongoDB, Express, Vue og Node. "
          img={mooncoins}
          link2={"https://github.com/marcuasc/Vue-crypto"}
        />

        <ProjectComponent
          title="Portfolioside"
          description="Som et hobbyprosjekt har jeg lagd denne portfoliosiden for å vise fram diverse prosjekter jeg har jobbet med. React, Framer motion, Typewriter.js og Tailwind CSS ble brukt til å utvikle nettsiden. "
          img={portfolio}
          link2={"https://github.com/marcuasc/portfolio"}
        />

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
