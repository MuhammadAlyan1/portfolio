"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import IconText from "./IconText";
import { MdEmail } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

const Navigation = () => {
  return (
    <div className="fixed bottom-4 left-[50%] flex w-fit translate-x-[-50%] items-center gap-6 rounded-md bg-white/5 px-4 py-2 backdrop-blur-sm">
      <IconText Icon={IoHomeSharp} label="Home" id="landing" />
      <IconText Icon={FaUser} label="About" iconSize={18} id="about-me" />
      <IconText
        Icon={VscVscode}
        label="Technologies"
        iconSize={21}
        id="tools-and-technologies"
      />
      <IconText Icon={FaFolder} label="Projects" iconSize={19} id="projects" />
      <IconText Icon={MdEmail} label="Contact" id="contact-me" />
    </div>
  );
};

export default Navigation;
