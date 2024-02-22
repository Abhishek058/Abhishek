import LanguageIcon from "@mui/icons-material/Language";
import Loader from "./Loader";
import { SouthEast } from "@mui/icons-material";
import ParallexText from "../OneTimeComponent/ParallexText";
import { motion } from "framer-motion";
import NavBar from "../OneTimeComponent/NavBar";

export default function Hero() {
  return (
    <>
      <Loader />
      <div className="w-full min-h-screen bg-[#9b9d9e] bg-cover bg-center Hero">
        <NavBar />
        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{
            duration: 2,
            scale: {
              type: "inertia",
              stiffness: 10,
              restDelta: 0.001,
            },
          }}
        >
          <div className="flex justify-between items-center translate-y-40 h-56">
            <div className="bg-[#1c1d20] h-28 w-64 rounded-r-full flex items-center justify-between">
              <div className="text-white translate-x-10 text-xl leading-5 tracking-wide">
                Located
                <br /> in
                <br /> India
              </div>
              <div className="flex h-20 w-20 items-center justify-center m-4 bg-gray-500 rounded-full animate-spin-slow cursor-pointer">
                <LanguageIcon className="h-14 w-14 text-white" />
              </div>
            </div>
            <div className="-translate-x-28">
              <h1 className=" -translate-y-12">
                <SouthEast className="text-white text-4xl animate-bounce" />
              </h1>
              <h1 className="text-white text-4xl leading-[50px]">
                Designer &
                <br />
                Website Developer
              </h1>
            </div>
          </div>

          <ParallexText />
        </motion.div>
      </div>
    </>
  );
}
