import React from "react";
import { IoMail, IoCall } from "react-icons/io5";
const Contact = () => {
  return (
    <section
      id="contact-me"
      className="mx-auto mt-20 max-w-screen-2xl px-8 pt-8"
    >
      <div className="relative">
        <p className="stroke-text">Contact</p>
        <h1 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-40%] text-nowrap text-4xl text-accent md:text-7xl lg:translate-y-[-30%]">
          Let's Talk
        </h1>
      </div>
      <div className="mx-auto mt-16 flex w-fit flex-col items-start gap-4 lg:flex-row lg:gap-12">
        <div className="mx-auto">
          <p className="mx-auto max-w-[15ch] text-center text-4xl md:text-5xl lg:text-start">
            Ask me anything, or just say Hi.
          </p>
          <div className="mx-auto my-4 flex w-fit flex-col gap-4 md:flex-row lg:mx-0 lg:mt-8 lg:flex-col">
            <a
              href="mailto:alyan0332@gmail.com"
              className="flex w-fit items-center gap-2 text-secondaryText"
            >
              <IoMail size={26} className="text-accent" />
              alyan0332@gmail.com
            </a>
            <a
              href="tel:+923333511135"
              className="flex w-fit items-center gap-2 text-secondaryText"
            >
              <IoCall size={26} className="text-accent" />
              +92 333 3511135
            </a>
          </div>
        </div>
        <div className="w-[80vw] md:max-w-[650px]">
          <form action="">
            <div className="my-4 flex gap-2">
              <label htmlFor="name" className="text-nowrap">
                Hello, I'm
              </label>
              <input
                type="text"
                id="name"
                placeholder="Muhammad Alyan"
                required
                className="w-full border-0 border-b-2 bg-primaryBackground px-1 text-accent outline-transparent focus-within:border-b-accent focus-within:outline-none focus:outline-transparent"
              />
            </div>
            <div className="">
              <label htmlFor="message">
                And I'm looking for a skilled individual to
              </label>
              <textarea
                rows={2}
                id="message"
                placeholder="Join my organization."
                required
                className="mt-4 block w-full border-0 border-b-2 bg-primaryBackground px-1 text-accent outline-transparent focus-within:border-b-accent focus-within:outline-none focus:outline-transparent"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 sm:flex-nowrap">
              <label htmlFor="email" className="text-nowrap">
                You can reach me at
              </label>
              <input
                type="email"
                id="email"
                placeholder="alyan0332@gmail.com"
                required
                className="w-full border-0 border-b-2 bg-primaryBackground px-1 text-accent outline-transparent focus-within:border-b-accent focus-within:outline-none focus:outline-transparent"
              />
            </div>
            <button className="my-4 w-full rounded-md border border-accent px-2 py-1 text-accent transition-colors duration-200 ease-in-out hover:bg-accent hover:text-primaryBackground">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
