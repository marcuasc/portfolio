import React from "react";
import "./index.css";
import MenuBtn from "../MenuButton/index";
import e from "../../Data/Frame1.svg";

const Menu = () => {
  return (
    <div className="flex flex-row max-w-screen-2xl w-screen justify-between text-midnightG">
      <div className="flex-1 h-12 max-w-sm ml-32">
        <a href="https://portfolio.marcusas.no/">
          <img src={e} alt="finner ikke bildet" className="m-0 p-0 w-44 " />
        </a>
      </div>

      <div className=" flex flex-row mr-5 ">
        <MenuBtn title="Hjem" link="/" />
        <MenuBtn title="Prosekter" link="../Projects/index#projects" />
        <MenuBtn title="Kontakt" link="../Footer/index#kontakt" />
      </div>
    </div>
  );
};

export default Menu;
