import React from "react";
import "./index.css";
import Menu from "../Menu/index"




const FrontPage = () => {
  return (
      <>
    <div className="flex-row bg-middleGrey min-h-screen w-screen block">
   <Menu></Menu>
    </div>
    </>
  );
}

export default FrontPage;