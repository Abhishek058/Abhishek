"use client";

import HomeContact from "@/components/Contact/HomeContact";
import BackgroundBeams from "@/components/OneTimeComponent/BackgroundBeams";
import Nav from "@/components/OneTimeComponent/MagneticButton";
import NavBar from "@/components/OneTimeComponent/NavBar";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div className="">
        <div className="bg-gradient-to-b from-white via-gray-200 to-gray-300">
          <NavBar font="text-black" />
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/mypic3.png"
              alt="about"
              width={250}
              height={250}
              className="rounded-full"
            />
            <p className="text-center sm:w-2/3 p-2 mt-12 sm:text-xl">
              I specialize as a Passionate Web Developer, with a keen interest
              in harnessing Google Cloud technologies to create cutting-edge
              solutions. Currently pursuing my education at Chitkara University,
              I'm actively honing my skills and staying updated on the latest
              developments in web development.
            </p>
          </div>

          <div className="flex justify-around items-center text-center py-20">
            <Nav
              title="Work"
              link="/work"
              styl="mt-6 mb-6 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-black rounded-full text-white flex items-center justify-center hover:bg-blue-500 cursor-pointer duration-300"
            />
            <Nav
              title="Contact"
              link="/contact"
              styl="mt-6 mb-6 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-black rounded-full text-white flex items-center justify-center hover:bg-blue-500 cursor-pointer duration-300"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-5xl font-medium">I can help you with...</h1>
            <div className="flex flex-col sm:flex-row py-32 items-center justify-center gap-y-12 gap-x-14 sm:w-[90%]">
              <div className="flex flex-col">
                <div className="text-gray-500 font-medium mb-4">01</div>
                <div className="w-full sm:w-[300px] h-[1.5px] bg-gray-500 mb-4"></div>
                <div>
                  <h1 className="text-3xl font-medium my-6">Design</h1>
                  <p>
                    With a solid track record in designing websites and apps, I
                    deliver strong and user-friendly digital designs. Solid
                    company branding is the foundation of any successful
                    website.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-500 font-medium mb-4">02</div>
                <div className="w-full sm:w-[300px] h-[1.5px] bg-gray-500 mb-4"></div>
                <div>
                  <h1 className="text-3xl font-medium my-6">Development</h1>
                  <p>
                    I build scalable websites from scratch that fit seamlessly
                    with design. My focus is on micro animations, transitions
                    and interaction. I use ReactJS, NextJS, TailwindCSS.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-500 font-medium mb-4">03</div>
                <div className="w-full sm:w-[300px] h-[1.5px] bg-gray-500 mb-4"></div>
                <div>
                  <h1 className="text-3xl font-medium my-6">
                    The full package
                  </h1>
                  <p>
                    With a solid track record in designing websites and apps, I
                    deliver strong and user-friendly digital designs. Solid
                    company branding is the foundation of any successful
                    website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeContact />
      </div>
      <BackgroundBeams />
    </>
  );
}
