import React from "react";
import { profile } from "@/data/profile";

const About = () => {
  return (
    <section id="about-me" className="mx-auto max-w-screen-2xl px-8 pt-8">
      <h2 className="text-center text-4xl font-medium md:mb-8 md:text-7xl">
        Alyan, Who?
      </h2>
      <div className="mx-auto my-4 h-1 w-[100px] rounded-md bg-accent"></div>
      <p className="mx-auto max-w-[30ch] text-center text-xl md:mb-24 md:max-w-[90ch] md:text-3xl">
        {profile.tagline}
      </p>
      <div className="mx-auto w-fit">
        <div className="my-8 gap-4 md:flex">
          <p className="mb-2 min-w-[150px] text-xl font-medium uppercase md:text-lg">
            SHORT BIO
          </p>
          <p className="max-w-[90ch] text-justify text-secondaryText">
            {profile.bio}
          </p>
        </div>
        <div className="my-8 gap-4 md:flex">
          <p className="mb-2 min-w-[150px] text-xl font-medium uppercase md:text-lg">
            Say Hello
          </p>
          <a href={`mailto:${profile.email}`} className="text-accent">
            {profile.email}
          </a>
        </div>
        <div className="my-8 gap-4 md:flex">
          <p className="mb-2 min-w-[150px] text-xl font-medium uppercase md:text-lg">
            Get in Touch
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {profile.socials.map((social, index) => {
              return (
                <React.Fragment key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 text-accent transition-all duration-200 ease-in-out hover:translate-y-[-2px]"
                  >
                    {social.name}
                  </a>
                  {index !== profile.socials.length - 1 && (
                    <div className="h-[16px] w-[2px] rounded-md bg-secondaryText"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="my-8 gap-4 md:flex">
          <p className="mb-2 min-w-[150px] text-xl font-medium uppercase md:text-lg">
            Learn More
          </p>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center justify-center rounded-md border border-accent bg-primaryBackground px-2 py-1 text-sm font-semibold uppercase text-accent transition-all duration-200 ease-in-out hover:bg-accent hover:text-primaryBackground"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
