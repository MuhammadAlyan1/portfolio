"use client";
import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const ProjectMedia: React.FC<{
  thumbnail: string;
  video: string;
  name: string;
}> = ({ thumbnail, video, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Play ${name} demo video`}
        className="group relative block w-full cursor-pointer overflow-hidden rounded-md lg:max-w-[750px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnail}
          alt={`${name} preview`}
          className="block aspect-video w-full object-cover"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 ease-in-out group-hover:bg-black/30 group-hover:opacity-100">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primaryBackground">
            <FaPlay className="ml-1 h-6 w-6" />
          </span>
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-2xl font-medium text-accent sm:text-3xl">
                {name}
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close video"
                className="flex items-center justify-center text-accent transition-opacity duration-200 ease-in-out hover:opacity-70"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
            <video
              autoPlay
              muted
              loop
              className="aspect-video w-full overflow-hidden rounded-md"
              poster={thumbnail}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectMedia;
