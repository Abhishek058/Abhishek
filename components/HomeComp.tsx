"use client";
import React, { useState, useEffect } from "react";

export default function HomeComp() {
  const sayHello = [
    "Hello",
    "नमस्ते",
    "Hola",
    "你好",
    "Bonjour",
    "Ciao",
    "안녕하세요",
    "Привет",
  ];

  const [currHelloIndex, setCurrHelloIndex] = useState(0);
  const [showHello, setShowHello] = useState(true);
  const [top, setTop] = useState("0");
  const [radius, setRadius] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHello(false);
      setTimeout(() => {
        if (currHelloIndex === sayHello.length - 1) {
          clearInterval(interval);

          setTop("-100%");
          setRadius("40%");
        } else {
          setCurrHelloIndex((prevIndex) => prevIndex + 1);
          setShowHello(true);
        }
      }, 1);
    }, 130);

    return () => {
      clearInterval(interval);
    };
  }, [currHelloIndex, sayHello]);

  return (
    <>
      <div
        className={`absolute bg-[#151618] w-[100%] h-[100%]  flex items-center justify-center`}
        style={{
          top: top,
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
          transition: "top 0.6s ease-in-out, border-radius 0.3s ease-in-out",
        }}
      >
        {showHello && (
          <h1 className="absolute text-5xl text-white">
            <li>{sayHello[currHelloIndex]}</li>
          </h1>
        )}
      </div>
      <div className="flex items-center justify-center w-full min-h-screen">
        Abhishek
      </div>
    </>
  );
}
