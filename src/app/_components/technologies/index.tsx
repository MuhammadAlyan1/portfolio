import React from "react";
import { toolsAndTechnologies } from "./toolsAndTechnologies";
import Image from "next/image";

const Technologies = () => {
  return (
    <section
      id="tools-and-technologies"
      className="mx-auto mt-20 max-w-screen-2xl px-8 pt-8"
    >
      <h1 className="my-8 text-center text-4xl font-medium md:mb-8 md:text-7xl">
        Tools & Technologies
      </h1>
      <div className="mx-auto my-4 flex w-fit max-w-[800px] flex-wrap justify-start gap-4 sm:justify-center">
        {toolsAndTechnologies?.map((technology) => {
          return (
            <div className="flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-secondaryBackground px-4 py-2 transition-transform duration-200 ease-in-out hover:scale-[1.15]">
              <Image src={technology.icon} alt="" height={26} />
              <p
                style={{ color: technology.color }}
                className="text-sm md:text-lg"
              >
                {technology.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
