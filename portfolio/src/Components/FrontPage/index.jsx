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

    

  <div className="w-3/4 h-3/4  m-20 mt-20 ml-40  rounded-xl p-6 font-undertitle text-3xl text-midnightG  z-10 absolute" >
  <h1 className=" font-title text-5xl font-bold mb-3" >Hei! Jeg er Marcus Schrøder</h1>
  <Typewriter
  onInit={(typewriter) => {
    typewriter
  .pauseFor(2500)
  .typeString('Informatikkstudent')
  .pauseFor(1000)
  .deleteChars(20)
  .typeString('Frontendutvikler')
  .pauseFor(1000)
  .deleteChars(20)
  .typeString('Surfeglad toppturentusiast')
  .pauseFor(1000)
  .deleteChars(30)
  .typeString('Pizzaiolo wannabe')
  .pauseFor(1000)
  .deleteChars(30)
  .typeString('Informatikkstudent')
  .start();
  }}
/>

  <p className=" text-lg w-2/4 mt-7 font-paragraph " > 
  Sed eget orci vel ante auctor elementum. Pellentesque velit massa, elementum non consequat vitae, facilisis eu metus. Vestibulum ultricies quam quam, nec laoreet nunc condimentum eu. Pellentesque gravida venenatis enim id ullamcorper.

  <br/> <br/>

  Ut quis sagittis mi, et auctor mauris. Nunc quis leo dapibus, euismod risus bibendum, consequat ex. Nullam commodo ipsum eu purus cursus egestas. Vivamus ipsum dui, malesuada sit amet urna id, imperdiet malesuada ante.

  </p>

  </div>
    
    <motion.img src={Portrait} alt="portrait" className=" w-2/6  mt-3.5 left-1/2  absolute opacity-70"
    initial={{opacity:0}}
    animate={{opacity:0.6}}
    transition={{delay:1.5 , duration:1.5}}/>
    
  
 
  </div>
    
  );
}

export default FrontPage;