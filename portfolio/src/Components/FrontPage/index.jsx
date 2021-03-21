import React from "react";
import "./index.css";
import Menu from "../Menu/index"
import Typewriter from "typewriter-effect";
import Portrait from "../../Data/portrait.jpg";
import { motion } from "framer-motion"




const FrontPage = () => {
  return (
  <div className="flex-row bg-whiteB min-h-screen w-screen block">
    <Menu></Menu>

    

  <div className="w-3/5 h-40  m-20 mt-36 rounded-xl p-6 font-sans  text-4xl text-midnightG z-10 absolute" >

  <Typewriter
  onInit={(typewriter) => {
    typewriter
  .pauseFor(2500)
  .typeString('Hei, Jeg heter Marcus Schrøder, og går siste året Bachelor i Informatikk på norgesbest')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('<strong>NTNU</strong>. Jeg liker å kode ting! ')
  .pauseFor(1000)
  .start();
  }}
/>
  </div>

  
    
    <motion.img src={Portrait} alt="portrait" className=" w-2/6  top-1/4 left-1/2 absolute opacity-60"
    initial={{opacity:0}}
    animate={{opacity:0.6}}
    transition={{delay:1.5 , duration:1.5}}/>
    
  
 
  </div>
    
  );
}

export default FrontPage;