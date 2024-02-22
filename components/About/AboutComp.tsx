import React from "react";
import Nav from "../OneTimeComponent/MagneticButton";
import "framer-motion";

export default function AboutComp() {
  return (
    <div className="bg-white h-[500px] flex flex-col items-center justify-center">
      <div className="w-[70%] flex gap-x-28">
        <div className="flex">
          <h1 className="text-4xl font-lg">
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
          <div className="translate-y-16">
            <Nav title="About" link="/About" styl="w-[200px] h-[200px] bg-black rounded-full text-white flex items-center justify-center hover:bg-blue-500 cursor-pointer duration-300"/>
          </div>
        </div>
      </div>
      <div className="w-full gap-x-3 flex items-center">
        <div className="h-[2px] bg-gray-300 w-1/4"></div>
        <div className="w-[140px] text-gray-500">Recent Work</div>
        <div className="h-[2px] bg-gray-300 w-full"></div>
      </div>
    </div>
  );
}
