"use client";
import Image from "next/image";
import React from "react";
import AlyanImage from "../../../assets/pictures/alyan.png";

const HeroSection = () => {
  return (
    <div
      id="landing"
      className="mx-auto flex h-[100vh] max-w-screen-2xl flex-col px-8 pt-8 md:items-center md:justify-between lg:flex-row"
    >
      <div className="">
        <h1 className="text-2xl font-bold text-accent sm:text-4xl xl:text-5xl">
          Muhammad Alyan
        </h1>
        <p className="my-2 text-3xl font-bold text-primaryText sm:text-5xl xl:text-6xl">
          Full Stack Developer
        </p>
        <p className="my-2 max-w-[60ch] text-base text-secondaryText sm:text-lg xl:text-[20px]">
          Crafting web solutions from concept to deployment, backed by a passion
          for innovation and staying at the forefront of technology.
        </p>
        <a
          href="/#contact-me"
          className="my-3 block w-fit rounded-md border border-accent px-2 py-[2px] font-medium uppercase text-accent transition-colors duration-200 ease-in-out hover:bg-accent hover:text-primaryBackground"
        >
          Let's connect
        </a>
      </div>
      <div className="fancyBorder mx-auto mt-12 flex h-[300px] w-[300px] items-center justify-center overflow-hidden bg-accent sm:h-[400px] sm:w-[400px] md:mx-0 md:mt-0 md:h-[500px] md:w-[500px]">
        <Image
          src={AlyanImage}
          priority={true}
          alt="Alyan's Picture"
          className="mt-16"
        />
      </div>
    </div>
  );
};

export default HeroSection;
