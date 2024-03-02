"use client";

import HomeContact from "@/components/Contact/HomeContact";
import Nav from "@/components/OneTimeComponent/MagneticButton";
import NavBar from "@/components/OneTimeComponent/NavBar";
import ProjectCard from "@/components/Projects/ProjectCard";
import React from "react";

export default function page() {
  return (
    <div className="bg-gray-200">
      <NavBar font="font-medium" />
      <div className="w-full flex items-center justify-center my-20">
        <div className="w-1/2 border-2"></div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center">
            Creating next level digital Projects
          </h1>
          <p className="p-2">Have a look</p>
          <p className="mt-10 text-4xl font-bold animate-bounce">↓</p>
        </div>
        <div className="w-1/2 border-2"></div>
      </div>
      <div className="flex flex-col items-center gap-y-20 p-6">
        <ProjectCard
          title="Gourmet Enclave"
          description="
          Indulge in culinary excellence at Gourmet Enclave. Elevate your dining experience with seamless online reservation services, savoring exquisite flavors in an ambiance that echoes luxury and taste. Bon appétit! 🍴😋"
          image="/GourmetEnclave.png"
          trylink="https://gourmetenclave.netlify.app/"
          githublink="https://github.com/Abhishek058/Gourmet_Enclave"
        />
        <ProjectCard
          title="HiLink"
          description="We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app 🏔️"
          image="/HiLink.png"
          trylink="https://github.com/Abhishek058/Camp-Travel"
          githublink="https://github.com/Abhishek058/Camp-Travel"
        />
        <ProjectCard
          title="Chitkara University Website"
          description="Experience Chitkara University's digital hub, showcasing academic excellence, innovation, and community engagement. Explore diverse programs, research, and resources in a dynamic online environment. Empowering learning, leadership, and success. 🎓"
          image="/CUweb.jpg"
          trylink="https://github.com/Abhishek058/Chitkara_University"
          githublink="https://github.com/Abhishek058/Chitkara_University"
        />
        <ProjectCard
          title="U-Mess"
          description="U_Mess: Your ultimate real-time meal companion! Discover daily menus, track dietary preferences, and never miss a delicious meal at your campus mess. 🥗"
          image="/umess.png"
          trylink="https://abhishek-u-mess.netlify.app/"
          githublink="https://github.com/Abhishek058/U_MESS"
        />
        <ProjectCard
          title="Personalize-Tshirt"
          description="Many large corporations already use 3D graphics to showcase their products. ThreeJS 3D product website and infuse it with the power of artificial intelligence! 👕"
          image="/Tshirt.png"
          trylink="https://github.com/Abhishek058/Personalize-Tshirt"
          githublink="https://github.com/Abhishek058/Personalize-Tshirt"
        />
        <ProjectCard
          title="Indi-Hospitality"
          description="Your trusted healthcare companion: Discover nearby hospitals, clinics, and healthcare facilities with ease using our intuitive Indihospitality. 🏥"
          image="/indihos.png"
          trylink="https://github.com/Abhishek058/Hospital_Finder"
          githublink="https://github.com/Abhishek058/Hospital_Finder"
        />
        <ProjectCard
          title="Google Docs Clone"
          description="Introducing our Google Docs clone: a user-friendly platform for collaborative document editing. Seamlessly share, edit, and collaborate on documents online with ease.📃"
          image="/docs.png"
          trylink="https://google-docs-clone.vercel.app/"
          githublink="https://github.com/Abhishek058/Google_Docs_Clone"
        />
        <ProjectCard
          title="Dream Destiny"
          description="This application is designed to help travelers plan their trips efficiently. Whether you're going on a weekend getaway or a long vacation, the Travel Planner App is here to assist you in organizing your itinerary, finding places of interest, and keeping all your travel information in one place. 🌍"
          image="/TravelPlanner.png"
          trylink="https://github.com/Abhishek058/Travel_Planner_DreamDestiny"
          githublink="https://github.com/Abhishek058/Travel_Planner_DreamDestiny"
        />
      </div>
      <HomeContact />
    </div>
  );
}
