import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
type IconTextProps = {
  Icon: IconType;
  label: string;
  iconSize?: number;
  id: string;
};

const IconText: React.FC<IconTextProps> = ({
  Icon,
  label,
  iconSize = 20,
  id,
}) => {
  return (
    <Link
      className="group relative cursor-pointer rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      href={`/#${id}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <Icon
        size={iconSize}
        className="transition-all duration-200 ease-in-out group-hover:scale-125 group-hover:text-accent group-focus-visible:scale-125 group-focus-visible:text-accent"
      />
      <p className="absolute left-[50%] top-[-25px] translate-x-[-50%] scale-0 text-xs uppercase text-accent transition-transform duration-200 ease-in-out group-hover:scale-100 group-focus-visible:scale-100">
        {label}
      </p>
    </Link>
  );
};

export default IconText;
