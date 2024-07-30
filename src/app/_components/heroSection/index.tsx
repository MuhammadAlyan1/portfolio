"use client";
import Image from "next/image";
import React from "react";
import AlyanImage from "../../../assets/pictures/alyan.png";

const HeroSection = () => {
  return (
    <div className="mx-auto flex h-[100vh] max-w-screen-2xl items-center justify-between px-8">
      <div className="">
        <h1 className="text-5xl font-bold text-accent">Muhammad Alyan</h1>
        <p className="my-2 text-6xl font-bold text-primaryText">
          Full Stack Developer
        </p>
        <p className="my-2 max-w-[60ch] text-[20px] text-secondaryText">
          Crafting web solutions from concept to deployment, backed by a passion
          for innovation and staying at the forefront of technology.
        </p>
        <button className="rounded-md border-[2px] border-accent px-2 py-[2px] font-medium uppercase text-accent transition-colors duration-200 ease-in-out hover:bg-accent hover:text-primaryBackground">
          Let's connect
        </button>
      </div>
      <div className="fancyBorder flex h-[500px] w-[500px] items-center justify-center overflow-hidden bg-accent">
        <Image src={AlyanImage} alt="Alyan's Picture" className="mt-16" />
      </div>
    </div>
  );
};

export default HeroSection;
