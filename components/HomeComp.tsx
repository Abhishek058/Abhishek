"use client";

import AboutComp from "./About/AboutComp";
import Contact from "./Contact/HomeContact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";

export default function HomeComp() {
  return (
    <>
      <Hero />  
      <AboutComp />
      <Projects />
      <Contact />
    </>
  );
}
