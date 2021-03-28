import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import { useViewportScroll } from "framer-motion";
import { useTransform } from "framer-motion";

const ScrollDown = () => {
  const { scrollYProgress } = useViewportScroll();
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);

  return (
    <motion.div
      className=" relative w-8 h-16 m-auto top-96 mt-36 bg-transparent border-midnightG border-2 rounded-2xl"
      style={{ opacity: yPosAnim }}
    >
      <motion.div
        className=" relative w-2 h-2 bg-black m-auto rounded-full"
        initial={{
          y: 5,
          opacity: 1,
        }}
        animate={{
          scale: [1, 1, 1, 1, 1, 1, 1],
          y: 45,
          opacity: 0,
        }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      ></motion.div>
    </motion.div>
  );
};

export default ScrollDown;
