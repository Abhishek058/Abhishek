import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";
import Loader from "./Loader";
import { SouthEast } from "@mui/icons-material";
import ParallexText from "./ParallexText";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <Loader />

      <div
        className="w-full min-h-screen bg-[#9b9d9e] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://t.ly/Jn8s5)",
        }}
      >
        <nav className="h-24 flex items-center ml-12 mr-12 justify-between">
          <div className="text-md text-white hover:font-medium hover:scale-120 hover:text-lg duration-500 cursor-pointer">
            © Code by Abhishek
          </div>
          <div className="flex text-white gap-x-10">
            <Link
              href="/Work"
              className="hover:font-medium hover:scale-150 hover:text-lg duration-500"
            >
              Work
            </Link>
            <Link
              href="/About"
              className="hover:font-medium hover:scale-150 hover:text-lg duration-500"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="hover:font-medium hover:scale-150 hover:text-lg duration-500"
            >
              Contact
            </Link>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 1000 }}
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
                <SouthEast className="text-white text-4xl animate-pulse" />
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
