import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
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
  );
}
