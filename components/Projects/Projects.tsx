import React from "react";
import { ThreeDCard } from "../3dCard/TreeDCard";
import Nav from "../OneTimeComponent/MagneticButton";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function Projects() {
  return (
    <div className="flex flex-col p-6 mb-28">
      <div className="flex flex-col sm:flex-row items-center justify-around py-6 my-4 rounded-lg duration-300 hover:scale-95 bg-gray-100 hover:bg-gray-200 hover:shadow-xl cursor-pointer">
        <ThreeDCard
          pos="translate-x-18"
          projectName="Gourmet Enclave"
          tryLink="https://gourmetenclave.netlify.app/"
          vidUrl="https://www.youtube.com/embed/Ae1Gk03S0Mg?si=uZX8ZN6-RTZCf5Aj"
          githubLink="https://github.com/Abhishek058/Gourmet_Enclave"
        />
        <div className="mt-6 p-2 sm:w-1/2">
          <h1 className="text-2xl font-bold">Gourmet Enclave:</h1>
          <p>
            Indulge in culinary excellence at Gourmet Enclave. Elevate your
            dining experience with seamless online reservation services,
            savoring exquisite flavors in an ambiance that echoes luxury and
            taste. Bon appétit!.
          </p>
          <h2 className="text-xl font-semibold mt-3">Tech Stack:</h2>
          <ol>
            <li>
              <ArrowRight />
              ReactJS
            </li>
            <li>
              <ArrowRight />
              TailwindCSS
            </li>
            <li>
              <ArrowRight />
              MongoDB
            </li>
            <li>
              <ArrowRight />
              ExpressJS
            </li>
          </ol>
          <h1></h1>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-around py-8 my-4 rounded-lg duration-300 hover:scale-95 bg-gray-100 hover:bg-gray-200 hover:shadow-xl cursor-pointer">
        <div className="mt-6 p-2 sm:w-1/2 sm:text-right">
          <h1 className="text-2xl font-bold">U-Mess</h1>
          <p>
            Your ultimate real-time meal companion! Discover daily menus, track
            dietary preferences, and never miss a delicious meal at your campus
            mess.
          </p>
          <h2 className="text-xl font-semibold mt-3">Tech Stack</h2>
          <ol>
            <li>
              ReactJS
              <ArrowLeft />
            </li>
            <li>
              TailwindCSS
              <ArrowLeft />
            </li>
            <li>
              TypeScript
              <ArrowLeft />
            </li>
          </ol>
          <h1></h1>
        </div>
        <ThreeDCard
          pos="-translate-x-18"
          projectName="U-Mess"
          tryLink="https://abhishek-u-mess.netlify.app/"
          vidUrl="https://www.youtube.com/embed/m4O9gVw08Vk&autoplay=1"
          githubLink="https://github.com/Abhishek058/U_MESS"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-around py-6 my-4 rounded-lg duration-300 hover:scale-95 bg-gray-100 hover:bg-gray-200 hover:shadow-xl cursor-pointer">
        <ThreeDCard
          pos="-translate-x-18"
          projectName="Google Docs"
          tryLink="https://google-docs-clone.vercel.app/"
          vidUrl="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          githubLink="https://github.com/Abhishek058/Google_Docs_Clone"
        />

        <div className="mt-6 p-2 sm:w-1/2">
          <h1 className="text-2xl font-bold">Google Docs:</h1>
          <p>
            Google Docs replica built with Next.js 14! Real-time editing
            User-friendly interface Simplify your workflow and boost
            productivity with seamless collaboration. Explore now to experience
            the future of document editing!
          </p>
          <h2 className="text-xl font-semibold mt-3">Tech Stack:</h2>
          <ol>
            <li>
              <ArrowRight />
              NextJS
            </li>
            <li>
              <ArrowRight />
              TailwindCSS
            </li>
            <li>
              <ArrowRight />
              FireBase
            </li>
          </ol>
          <h1></h1>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-20">
        <div className="w-1/3 border-2"></div>
        <Nav
          title="More Projects"
          link="/Work"
          styl="sm:w-[250px] sm:h-[80px] w-[250px] h-[50px] text-black border-4 rounded-full flex items-center justify-center hover:bg-black hover:text-white cursor-pointer duration-300"
        />
        <div className="w-1/3 border-2"></div>
      </div>
    </div>
  );
}
