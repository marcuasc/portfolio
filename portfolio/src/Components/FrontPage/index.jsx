import React from "react";
import "./index.css";
import Menu from "../Menu/index"




const FrontPage = () => {
  return (
      <>
    <div className="flex-row bg-blueGray min-h-screen w-screen block">
   <Menu></Menu>

   <div className="w-3/5 h-72 bg-gray-300 m-auto mt-52 rounded-md" ></div>
    </div>
    </>
  );
}

export default FrontPage;