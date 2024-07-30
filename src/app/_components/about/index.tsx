import React from "react";
const About = () => {
  return (
    <section id="about-me" className="mx-auto max-w-screen-2xl px-8 pt-8">
      <h1 className="text-center text-4xl font-medium md:mb-8 md:text-7xl">
        Alyan, Who?
      </h1>
      <div className="mx-auto my-4 h-1 w-[100px] rounded-md bg-accent"></div>
      <p className="mx-auto max-w-[30ch] text-center text-xl md:mb-24 md:max-w-[90ch] md:text-3xl">
        A full stack developer based in Islamabad, Pakistan.
      </p>
      <div className="mx-auto w-fit">
        <div className="my-8 gap-4 md:flex">
          <p className="mb-2 min-w-[150px] text-xl font-medium uppercase md:text-lg">
            SHORT BIO
          </p>
          <p className="max-w-[90ch] text-justify text-secondaryText">
            I'm Muhammad Alyan, a Full stack Developer from Islamabad, Pakistan,
            with a Bachelor's degree in Software Engineering. With over a year
            of professional experience in the MERN stack, I have honed my skills
            in creating clean, maintainable code and enhancing user experiences
            through efficient and optimized web applications. My journey in web
            development spans over three years, including both freelance and
            full-time roles, where I have developed a strong foundation in
            software engineering principles and practices.
          </p>
        </div>
        <div className="my-8 gap-4 md:flex">
          <p className="mb-2 min-w-[150px] text-xl font-medium uppercase md:text-lg">
            Say Hello
          </p>
          <a href="mailto:alyan0332@gmail.com" className="text-accent">
            alyan0332@gmail.com
          </a>
        </div>
        <div className="my-8 gap-4 md:flex">
          <p className="mb-2 min-w-[150px] text-xl font-medium uppercase md:text-lg">
            Get in Touch
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/alyan-hanif-2542b11ba/"
              target="_blank"
              className="text-accent"
            >
              LinkedIn
            </a>
            <div className="h-[16px] w-[2px] rounded-md bg-secondaryText"></div>
            <a
              href="https://github.com/MuhammadAlyan1"
              target="_blank"
              className="text-accent"
            >
              GitHub
            </a>
            <div className="h-[16px] w-[2px] rounded-md bg-secondaryText"></div>
            <a
              href="https://x.com/AlyanDeveloper"
              target="_blank"
              className="text-accent"
            >
              Twitter
            </a>
            <div className="h-[16px] w-[2px] rounded-md bg-secondaryText"></div>

            <a
              href="https://www.fiverr.com/alyan_hanif"
              target="_blank"
              className="text-accent"
            >
              Fiverr
            </a>
            <div className="h-[16px] w-[2px] rounded-md bg-secondaryText"></div>
            <a
              href="https://www.upwork.com/freelancers/~01bf5a1ce43634bf45"
              target="_blank"
              className="text-accent"
            >
              Upwork
            </a>
          </div>
        </div>
        <div className="my-8 gap-4 md:flex">
          <p className="mb-2 min-w-[150px] text-xl font-medium uppercase md:text-lg">
            Learn More
          </p>
          <a
            href="./resume.pdf"
            download={`Alyan's Resume`}
            className="flex w-fit items-center justify-center rounded-md border border-accent bg-primaryBackground px-2 py-1 text-sm font-semibold uppercase text-accent transition-all duration-200 ease-in-out hover:bg-accent hover:text-primaryBackground"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
