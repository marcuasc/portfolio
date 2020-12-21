import React from "react";
import "./index.css";



const Menu = () => {
  return (
    <div className = "flex flex-row max-w-screen-2xl w-screen justify-between">
      <div className="flex-1 h-12 max-w-sm " >
      <img src= "https://img.icons8.com/material/96/000000/circled-m.png" alt="finner ikke bildet" className="ml-4" />
      </div>

      <div className=" flex flex-row ">
      <div className="flex-1 max-w-xs text-gray-300 m-10 font-bold " > 
      <a href="https://www.w3schools.com"  >Projects</a>
      </div>
      <div className="flex-1 max-w-xs text-gray-300 m-10 font-bold " >
        <a href="https://www.w3schools.com"  >About</a>
      </div>
      <div className="flex-1 max-w-xs text-gray-300 m-10 font-bold " >
        <a href="https://www.w3schools.com"  >Contact</a>
      </div>
      </div>

    </div>
  );
}

export default Menu;