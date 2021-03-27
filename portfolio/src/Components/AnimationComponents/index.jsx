import React from "react";
import { motion } from "framer-motion";

const MyComponent = () => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    className="flex bg-purple-300 h-8 w-8 "
  />
);

export default MyComponent;
