import React from "react";
import "./index.css";
import { motion } from "framer-motion";

const MenuBtn = (props) => {
  return (
    <div className="flex-1 max-w-xs  m-10 font-bold  border-b-2 transition duration-500 ease-in-out border-whiteB  hover:border-midnightG_light ">
      <motion.a href={props.link} className=" pb-3 hover:opacity-75">
        {props.title}
      </motion.a>
    </div>
  );
};

export default MenuBtn;
