import { SouthWest } from "@mui/icons-material";
import React from "react";
import Nav from "../OneTimeComponent/MagneticButton";
import Footer from "../OneTimeComponent/Footer";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="bg-[#1c1d20] h-[650px] flex items-center justify-center">
        <div className="sm:w-2/3">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center leading-6">
                  <Image
                    src="/mypic3.png"
                    width={80}
                    height={80}
                    className="rounded-full"
                    alt=""
                  />
                  <p className="text-[50px] sm:text-[80px] text-white ml-5"> Let’s work</p>
                </div>
                <div>
                  <p className="text-[50px] sm:text-[80px] text-white">together</p>
                </div>
              </div>
              <div className="text-white">
                <SouthWest className="text-white animate-ping" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-gray-400 h-[1px] w-1/2 sm:w-9/12"></div>
              <Nav
                title="Get in touch"
                styl="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] bg-black rounded-full text-white flex items-center justify-center hover:bg-blue-500 cursor-pointer duration-300"
                link="/contact"
              />
            </div>
            <div className="flex flex-col items-center sm:flex-row sm:gap-x-16 gap-y-8 mt-8 sm:mt-0">
              <Nav
                title="abhihek9728@gmail.com"
                styl="w-[350px] h-[60px] border-[1px] border-gray-500 rounded-full text-white flex items-center justify-center hover:bg-blue-500 cursor-pointer duration-300"
                link="/contact"
              />
              <Nav
                title="+91 9728230481"
                styl="w-[300px] h-[60px] border-[1px] border-gray-500 rounded-full text-white flex items-center justify-center hover:bg-blue-500 cursor-pointer duration-300"
                link="/contact"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
