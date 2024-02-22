import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#1c1d20] flex items-center justify-between px-10 py-4">
      <div className="flex items-center gap-x-8">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-gray-600 text-xs font-medium">VERSION</h1>
          <h1 className="text-gray-300 text-xs font-medium">2024 © Edition</h1>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-gray-600 text-xs font-medium">LOCAL TIME</h1>
          <h1 className="text-gray-300 text-xs font-medium">08:08 AM GMT+1</h1>
        </div>
      </div>
      <div className="flex items-center gap-x-8">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-gray-600 text-xs font-medium">SOCIALS</h1>
          <div className="flex gap-x-8">
            <h1 className="text-gray-300 text-xs font-medium">
              <a href="https://github.com/Abhishek058" target="blank">
                GitHub
              </a>
            </h1>
            <h1 className="text-gray-300 text-xs font-medium">
              <a
                href="https://www.linkedin.com/in/abhishek-mehta01/"
                target="blank"
              >
                LinkedIn
              </a>
            </h1>
            <h1 className="text-gray-300 text-xs font-medium">
              <a href="https://twitter.com/abhishek0972" target="blank">
                Twitter
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
