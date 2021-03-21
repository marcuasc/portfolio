import React from "react";
import "./index.css";
import Menu from "../Menu/index"
import Typewriter from "typewriter-effect";
//import { motion } from "framer-motion"




const FrontPage = () => {
  return (
  <div className="flex-row bg-blueGray min-h-screen w-screen block">
    <Menu></Menu>
  <div className="w-3/5 h-40 bg-gray-300 m-auto mt-36 rounded-xl p-6 font-sans bg-opacity-30 text-4xl text-yellow-500" >

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
 
  </div>
    
  );
}

export default FrontPage;