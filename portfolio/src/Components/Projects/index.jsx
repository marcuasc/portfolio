import React from "react";
import "./index.css";
import webdev from "../../Data/webdev.png";



const Projects = () => {
  return (
      <>
    <div className="flex-row bg-blueGray min-h-screen w-screen transform rotate-rq-8 block p-7">

      <div className="flex flex-col w-1/5 h-8 m-auto justify-center bg-red-300 p-8 text-3xl" >
        <h1 className="m-auto" >Prosjekter</h1>
        </div>

        <div className=" flex flex-row w-3/5 h-96 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 m-auto mb-5 mt-32 shadow-2xl" >
        <div className=" flex flex-col w-1/2 h-96 rounded-l-lg border-indigo-100 p-8" >
        <div class="uppercase tracking-wide text-2xl text-black font-semibold">Case study</div>
        <p className =" text-white font-semibold mt-5 " > Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers. </p>
        <button class="bg-blue-400 border-black  hover:bg-blue-700 text-white font-bold font-mo py-2 px-4 rounded-full w-8/12 m">
          View Project
        </button>
        </div>
        <div className="flex w-1/2 h-80 rounded-r-md " >
        <img src= {webdev} alt="webdev" className="flex w-full h-96 rounded-r-md " />
        </div>
        </div>

        <div className=" flex flex-row w-3/5 h-96 rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 m-auto mb-5 mt-32 shadow-2xl" >
        <div className=" flex flex-col w-1/2 h-96 rounded-l-md border-indigo-100 p-8" >
        <div class="uppercase tracking-wide text-2xl text-black font-semibold">Case study</div>
        <p className =" text-white font-semibold mt-5 " > Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers. </p>
        </div>
        <div className="flex w-1/2 h-80 rounded-r-md " >
        <img src= {webdev} alt="webdev" className="flex w-full h-96 rounded-r-md " />
        </div>
        </div>

        <div className=" flex flex-row w-3/5 h-96 rounded-md bg-gradient-to-r from-green-400 to-blue-500 m-auto mb-5 mt-32 shadow-2xl" >
        <div className=" flex flex-col w-1/2 h-96 rounded-l-md border-indigo-100 p-8" >
        <div class="uppercase tracking-wide text-2xl text-black font-semibold">Case study</div>
        <p className =" text-white font-semibold mt-5 " > Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers. </p>
        </div>
        <div className="flex w-1/2 h-80 rounded-r-md " >
        <img src= {webdev} alt="webdev" className="flex w-full h-96 rounded-r-md " />
        </div>
        </div>

        <div className=" flex flex-row w-3/5 h-96 rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 m-auto mb-5 mt-32 shadow-2xl" >
        <div className=" flex flex-col w-1/2 h-96 rounded-l-md border-indigo-100 p-8" >
        <div class="uppercase tracking-wide text-2xl text-black font-semibold">Case study</div>
        <p className =" text-white font-semibold mt-5 " > Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers. </p>
        </div>
        <div className="flex w-1/2 h-80 rounded-r-md " >
        <img src= {webdev} alt="webdev" className="flex w-full h-96 rounded-r-md " />
        </div>
        </div>
    </div>
    </>
  );
}

export default Projects;