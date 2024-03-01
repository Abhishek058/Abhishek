"use client"

import HomeContact from "@/components/Contact/HomeContact";
import NavBar from "@/components/OneTimeComponent/NavBar";
import ProjectCard from "@/components/Projects/ProjectCard";
import React from "react";

export default function page() {
  return (
    <div>
      <NavBar font="font-medium" />
      <div className="flex flex-col items-center gap-y-20 p-8">
        <ProjectCard
          title="Gourmet Enclave"
          description="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aut rerum
      debitis earum labore quia, eius eveniet laborum nam nisi quae odit
      cupiditate porro nihil ut quasi possimus atque aspernatur."
          image="https://shorturl.at/jnrKM"
        />
        <ProjectCard
          title="Gourmet Enclave"
          description="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aut rerum
      debitis earum labore quia, eius eveniet laborum nam nisi quae odit
      cupiditate porro nihil ut quasi possimus atque aspernatur."
          image="https://shorturl.at/ruTW6"
        />
        <ProjectCard
          title="Gourmet Enclave"
          description="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aut rerum
      debitis earum labore quia, eius eveniet laborum nam nisi quae odit
      cupiditate porro nihil ut quasi possimus atque aspernatur."
          image="https://shorturl.at/ruTW6"
        />
        <ProjectCard
          title="Gourmet Enclave"
          description="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aut rerum
      debitis earum labore quia, eius eveniet laborum nam nisi quae odit
      cupiditate porro nihil ut quasi possimus atque aspernatur."
          image="https://shorturl.at/ruTW6"
        />
        <ProjectCard
          title="Gourmet Enclave"
          description="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aut rerum
      debitis earum labore quia, eius eveniet laborum nam nisi quae odit
      cupiditate porro nihil ut quasi possimus atque aspernatur."
          image="https://shorturl.at/ruTW6"
        />
      </div>
      <HomeContact />
    </div>
  );
}
