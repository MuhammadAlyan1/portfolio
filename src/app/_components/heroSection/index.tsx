"use client";
import Image from "next/image";
import React from "react";
import AlyanImage from "../../../assets/pictures/alyan.png";
import TailwindIcon from "../../../assets/icons/technologies/tailwind.svg";
import PythonIcon from "../../../assets/icons/technologies/python.svg";
import NodeIcon from "../../../assets/icons/technologies/node.svg";
import ReactIcon from "../../../assets/icons/technologies/react.svg";
const HeroSection = () => {
  return (
    <div
      id="landing"
      className="relative mx-auto flex h-[100vh] max-w-screen-2xl flex-col px-8 pt-8 md:items-center md:justify-between lg:flex-row"
    >
      <section className="relative">
        <h1 className="text-2xl font-bold text-accent sm:text-xl xl:text-3xl">
          Alyan Hanif
        </h1>
        <p className="my-2 text-3xl font-bold text-primaryText sm:text-5xl xl:text-6xl">
          AI Full Stack Engineer
        </p>
        <p className="my-2 max-w-[60ch] text-base text-secondaryText sm:text-lg xl:text-[20px]">
          I build AI-powered systems, automation workflows, and scalable web
          applications that reduce manual work and improve business operations.
        </p>
        <a
          href="/#contact-me"
          className="my-6 block w-fit rounded-md border border-accent px-2 py-[2px] font-normal uppercase text-accent transition-colors duration-200 ease-in-out hover:bg-accent hover:text-primaryBackground"
        >
          Let's work together
        </a>
      </section>
      <div className="relative mx-auto w-fit md:mx-0">
        <div className="fancyBorder mx-auto mt-12 flex h-[300px] w-[300px] items-center justify-center overflow-hidden bg-accent sm:h-[400px] sm:w-[400px] md:mx-0 md:mt-0 md:h-[500px] md:w-[500px]">
          <Image
            src={AlyanImage}
            priority={true}
            alt="Alyan Hanif — AI Full Stack Engineer"
            className="mt-16"
          />
        </div>

        <div className="moving-items absolute left-[-5%] top-[10%] flex h-8 w-8 items-center justify-center rounded-md bg-teal-500/20 p-1 delay-500">
          <Image
            src={TailwindIcon}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="moving-items4 absolute right-[5%] top-[2%] flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/20 p-1">
          <Image
            src={PythonIcon}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="moving-items3 absolute bottom-[-5%] left-[12%] flex h-8 w-8 items-center justify-center rounded-md bg-green-500/20 p-1">
          <Image
            src={NodeIcon}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="moving-items2 absolute bottom-[8%] right-[-2%] flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/20 p-1">
          <Image
            src={ReactIcon}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
