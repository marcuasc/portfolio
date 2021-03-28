import React from "react";
import "./index.css";
import MenuBtn from "../MenuButton/index";
import e from "../../Data/icons8-circled-m-100.png";

const Menu = () => {
  return (
    <div className="flex flex-row max-w-screen-2xl w-screen justify-between text-midnightG">
      <div className="flex-1 h-12 max-w-sm ">
        <img
          src={e}
          href="http://localhost:3000/"
          alt="finner ikke bildet"
          className="ml-4"
        />
      </div>

      <div className=" flex flex-row ">
        <MenuBtn title="Projects" link="https://www.nrk.no" />
        <MenuBtn title="About" link="https://www.db.no" />
        <MenuBtn title="Contact" link="https://www.vg.no" />
      </div>
    </div>
  );
};

export default Menu;
