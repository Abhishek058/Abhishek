import React from "react";
import Nav from "./MagneticButton";
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
            <Nav />
          </div>
        </div>
      </div>
    </div>
  );
}
