import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-4">
      <div className="flex w-fit flex-col items-center gap-4">
        <div className="flex w-fit flex-col gap-4">
          <a href="mailto:alyan0332@gmail.com">
            <MdAlternateEmail
              size={32}
              className="text-secondaryText hover:text-accent transition-all duration-200 ease-in-out"
            />
          </a>
          <a href="https://github.com/MuhammadAlyan1" target="_blank">
            <FaGithub
              size={32}
              className="text-secondaryText hover:text-accent transition-all duration-200 ease-in-out"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/alyan-hanif-2542b11ba/"
            target="_blank"
          >
            <FaLinkedinIn
              size={32}
              className="text-secondaryText hover:text-accent transition-all duration-200 ease-in-out"
            />
          </a>
        </div>
        <div className="bg-secondaryText h-[75px] w-[3px] rounded-md"></div>
      </div>
    </div>
  );
};

export default Footer;
