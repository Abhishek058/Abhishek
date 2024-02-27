import React from "react";
import Nav from "../OneTimeComponent/MagneticButton";
import "framer-motion";

export default function AboutComp() {
  return (
    <div className="h-[550px] flex flex-col items-center justify-center pt-10">
      <div className="w-[90%] flex flex-col gap-y-10 sm:flex-row sm:gap-x-28 sm:w-[70%]">
        <div className="">
          <h1 className="text-2xl font-medium sm:text-3xl sm:font-normal">
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <p>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
          <div className="translate-y-2 sm:translate-y-20">
            <Nav title="About" link="/About" styl="mt-6 mb-6 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-black rounded-full text-white flex items-center justify-center hover:bg-blue-500 cursor-pointer duration-300"/>
          </div>
        </div>
      </div>
      <div className="w-full gap-x-3 flex items-center">
        <div className="h-[2px] bg-gray-300 w-1/4"></div>
        <div className="w-[140px] text-gray-500 text-sm text-center sm:text-lg">Recent Work</div>
        <div className="h-[2px] bg-gray-300 w-3/4"></div>
      </div>
    </div>
  );
}
