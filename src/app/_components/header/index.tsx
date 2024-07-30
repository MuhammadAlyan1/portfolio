import Image from "next/image";
import React from "react";
import icon from "../../../assets/icons/icon.svg";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  return (
    <div className="sticky left-0 right-0 top-0">
      <div className="flex items-center justify-between">
        <Image src={icon} height={50} width={50} alt="Alyan's Logo" />
        <div className="flex items-center gap-2">
          <a href="mailto:alyan0332@gmail.com" className="text-secondaryText">
            alyan0332@gmail.com
          </a>
          <CgMenuRight size={32} className="text-accent" />
        </div>
      </div>
    </div>
  );
};

export default Header;
