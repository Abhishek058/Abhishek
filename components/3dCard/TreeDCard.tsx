"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./CardContainer";

interface ThreeDCardProps {
  pos: string;
  vidUrl: string;
  projectName: string;
  tryLink: string;
}

export function ThreeDCard({
  pos,
  vidUrl,
  projectName,
  tryLink,
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var" pos={`${pos}`}>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {projectName}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <iframe
            width="1200"
            height="1000"
            src="https://www.youtube.com/embed/m4O9gVw08Vk?si=t7tOTg4sDcyyMEXR&amp&autoplay=1&mute=1&controls=0&loop=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          ></iframe>
        </CardItem>
        <div className="flex justify-between items-center mt-10 hover:scale-110 duration-500">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border-2 hover:bg-white hover:text-black hover:scale-125"
          >
            <a href={`${tryLink}`} target="blank">
              Try now →
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
