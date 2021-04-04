import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const MenuBtn = (props) => {
  return (
    <div className="flex-1 max-w-xs  m-10 font-title  border-b-2 transition duration-500 ease-in-out border-whiteB  hover:border-midnightG_light ">
      <motion.div className=" pb-1 hover:opacity-75">
        <Link smooth to={props.link}>
          {props.title}
        </Link>
      </motion.div>
    </div>
  );
};

export default MenuBtn;
