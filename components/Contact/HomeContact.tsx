import { SouthWest } from "@mui/icons-material";
import React from "react";
import Nav from "../OneTimeComponent/MagneticButton";
import Footer from "../OneTimeComponent/Footer";

export default function Contact() {
  return (
    <>
      <div className="bg-[#1c1d20] h-screen flex items-center justify-center">
        <div className="w-2/3">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center leading-6">
                  <img
                    src="https://shorturl.at/gzQ69"
                    className="rounded-full  w-[80px] h-[80px]"
                    alt=""
                  />
                  <p className="text-[80px] text-white ml-5"> Let’s work</p>
                </div>
                <div>
                  <p className="text-[80px] text-white">together</p>
                </div>
              </div>
              <div className="text-white">
                <SouthWest className="text-white animate-ping" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-">
              <div className="bg-gray-400 h-[1px] w-9/12"></div>
              <Nav
                title="Get in touch"
                styl="w-[180px] h-[180px] bg-black rounded-full text-white flex items-center justify-center hover:bg-blue-500 cursor-pointer duration-300"
                link="/Contact"
              />
            </div>
            <div className="flex gap-x-16">
              <Nav
                title="abhihek9728@gmail.com"
                styl="w-[345px] h-[60px] border-[1px] border-gray-500 rounded-full text-white flex items-center justify-center hover:bg-blue-500 cursor-pointer duration-300"
                link="/Contact"
              />
              <Nav
                title="+91 9728230481"
                styl="w-[315px] h-[60px] border-[1px] border-gray-500 rounded-full text-white flex items-center justify-center hover:bg-blue-500 cursor-pointer duration-300"
                link="/Contact"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
