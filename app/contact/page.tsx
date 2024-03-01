import NavBar from "@/components/OneTimeComponent/NavBar";
import { GitHub, LinkedIn, SouthWest, Twitter } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
      <div className="bg-[#1c1d20]">
        <NavBar font="text-white mb-28" />
        <div className="flex flex-col items-center justify-center">
          <div className="sm:w-2/3">
            <div className="flex items-center leading-8">
              <Image
                src="/mypic3.png"
                width={60}
                height={60}
                className="rounded-full sm:hidden mr-4"
                alt=""
              />
              <p className="text-[45px] sm:text-[80px] text-white">
                Let’s start a
              </p>
            </div>
            <div>
              <p className="text-[45px] sm:text-[80px] text-white">
                project together
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse sm:flex-row px-2 gap-y-20 justify-center my-16">
            <form className="form sm:w-[60%] flex flex-col gap-y-10">
              <div className="flex flex-col">
                <div className="flex flex-col gap-y-4">
                  <p className="text-white text-lg flex items-center">
                    <span className="text-gray-600 mr-5 text-sm">01</span>What's
                    your name
                  </p>
                  <input
                    placeholder="John Doe *"
                    name="Name"
                    type="text"
                    className="outline-none border-none bg-transparent ml-10 text-lg text-white"
                  />
                </div>
                <div className="w-[90%] h-[1px] bg-gray-600 my-6"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-y-4">
                  <p className="text-white text-lg flex items-center">
                    <span className="text-gray-600 mr-5 text-sm">02</span>What's
                    your Email
                  </p>
                  <input
                    placeholder="john@doe.com *"
                    name="Email"
                    type="email"
                    className="outline-none border-none bg-transparent ml-10 text-lg text-white"
                  />
                </div>
                <div className="w-[90%] h-[1px] bg-gray-600 my-6"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-y-4">
                  <p className="text-white text-lg flex items-center">
                    <span className="text-gray-600 mr-5 text-sm">03</span>What's
                    your message
                  </p>
                  <input
                    placeholder="Hello, like to work with you *"
                    name="Message"
                    type="text"
                    className="outline-none border-none bg-transparent ml-10 text-lg text-white"
                  />
                </div>
                <div className="w-[90%] h-[1px] bg-gray-600 my-6"></div>
              </div>
              <input
                name="Name"
                type="submit"
                className="text-white font-semibold border-2 my-6 w-full sm:w-[200px] h-[50px] rounded-full transition-all duration-300 hover:bg-blue-500 cursor-pointer"
              />
            </form>
            <div className="flex flex-col items-center gap-y-8">
              <Image
                src="/mypic3.png"
                width={90}
                height={90}
                className="rounded-full hidden sm:flex -translate-y-10"
                alt=""
              />

              <div className="w-[90%] ml-10 flex flex-col gap-y-16">
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-gray-600 text-xs font-semibold">
                    CONTACT DETAILS
                  </h1>
                  <h1 className="text-white">abhishek9728@gmail.com</h1>
                  <h1 className="text-white">+91 9728230481</h1>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-gray-600 text-xs font-semibold">
                    ADDRESS
                  </h1>
                  <h1 className="text-white">Chitkara University</h1>
                  <h1 className="text-white">Rajpura, Punjab</h1>
                  <h1 className="text-white">Location: India</h1>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-gray-600 text-xs font-semibold">
                    SOCIALS
                  </h1>
                  <a
                    href="https://github.com/Abhishek058"
                    className="text-white flex items-center"
                  >
                    <GitHub /> &nbsp; Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek-mehta01/"
                    className="text-white flex items-center"
                  >
                    <LinkedIn /> &nbsp; LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/abhishek0972"
                    className="text-white flex items-center"
                  >
                    <Twitter /> &nbsp; Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
