import React from "react";
import { ThreeDCard } from "../3dCard/TreeDCard";
import Nav from "../OneTimeComponent/MagneticButton";

export default function Projects() {
  return (
    <div className="flex flex-col gap-y-12 p-8 mb-28">
      <div className="flex items-center justify-around">
        <ThreeDCard pos="translate-x-18" />
        <div className="w-1/3">
          <h1>
            Indulge in culinary excellence at Gourmet Enclave. Elevate your
            dining experience with seamless online reservation services,
            savoring exquisite flavors in an ambiance that echoes luxury and
            taste. Bon appétit!
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <div className="w-1/3">
          <h1>
            Indulge in culinary excellence at Gourmet Enclave. Elevate your
            dining experience with seamless online reservation services,
            savoring exquisite flavors in an ambiance that echoes luxury and
            taste. Bon appétit!
          </h1>
        </div>
        <ThreeDCard pos="-translate-x-18" />
      </div>
      <div className="flex items-center justify-around">
        <ThreeDCard pos="-translate-x-18" />
        <div className="w-1/3">
          <h1>
            Indulge in culinary excellence at Gourmet Enclave. Elevate your
            dining experience with seamless online reservation services,
            savoring exquisite flavors in an ambiance that echoes luxury and
            taste. Bon appétit!
          </h1>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-20">
        <div className="w-1/3 border-2"></div>
        <Nav
          title="More Projects"
          link="/Work"
          styl="w-[250px] h-[80px] text-black border-4 rounded-full flex items-center justify-center hover:bg-black hover:text-white cursor-pointer duration-300"
        />
        <div className="w-1/3 border-2"></div>
      </div>
    </div>
  );
}
