import React from "react";
import { IoMail, IoCall } from "react-icons/io5";
import ContactForm from "./ContactForm";
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
      <div className="mx-auto mt-16 flex w-full flex-col items-start gap-4 lg:flex-row lg:gap-12">
        <div className="mx-auto">
          <p className="mx-auto max-w-[15ch] text-center text-4xl md:text-5xl lg:text-start">
            Got questions? I'm here to help!
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
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
