import React from "react";
import Link from "next/link";

export default function NavBar({ font }: { font: string }) {
  return (
    <nav className={`h-24 flex items-center ml-12 mr-12 justify-between ${font}`}>
      <Link href="/" className="text-md hover:font-medium hover:scale-120 hover:text-lg duration-500 cursor-pointer">
        © Code by Abhishek
      </Link>
      <div className="gap-x-10 hidden sm:flex">
        <Link
          href="/work"
          className="hover:font-medium hover:scale-150 hover:text-lg duration-500"
        >
          Work
        </Link>
        <Link
          href="/about"
          className="hover:font-medium hover:scale-150 hover:text-lg duration-500"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:font-medium hover:scale-150 hover:text-lg duration-500"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
