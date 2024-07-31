"use client";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { IoMdSend } from "react-icons/io";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please enter all fields.");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");

    emailjs.sendForm(
      "service_u34fd5j",
      "template_as6rgmv",
      form?.current,
      "nhM5ZYdNE5pxT7fCY",
    );

    form?.current?.reset();

    toast.success("Message Sent!");
  };
  return (
    <form
      className="mx-auto w-full max-w-[650px] rounded-2xl bg-white/5 p-4 backdrop-blur-lg"
      onSubmit={handleSubmit}
      ref={form}
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="group relative flex-1">
          <input
            id="name"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full flex-1 rounded-2xl bg-white/5 px-4 py-4 text-lg backdrop-blur-lg focus:outline-none"
          />
          <label
            htmlFor="name"
            className={`absolute left-[16px] top-[26%] select-none text-lg transition-all duration-200 ease-in-out group-focus-within:top-[-16px] ${name ? "top-[-16px]" : ""}`}
          >
            Name
          </label>
        </div>
        <div className="group relative flex-1">
          <input
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full rounded-2xl bg-white/5 px-4 py-4 text-lg backdrop-blur-lg focus:outline-none"
          />
          <label
            htmlFor="email"
            className={`absolute left-[16px] top-[26%] select-none text-lg transition-all duration-200 ease-in-out group-focus-within:top-[-16px] ${email ? "top-[-16px]" : ""}`}
          >
            Email
          </label>
        </div>
      </div>
      <div className="group relative flex-1">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          name="message"
          id="message"
          className="my-4 w-full flex-1 rounded-2xl bg-white/5 px-4 py-4 text-lg backdrop-blur-lg focus:outline-none"
        />
        <label
          htmlFor="message"
          className={`absolute left-[16px] top-[30px] select-none text-lg transition-all duration-200 ease-in-out group-focus-within:top-[0px] ${message ? "top-[0px]" : ""}`}
        >
          Message
        </label>
      </div>
      <button className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-primaryText px-4 py-4 font-semibold uppercase text-primaryBackground">
        Send Message
        <IoMdSend className="relative left-0 transition-all duration-200 ease-in-out group-hover:left-1" />
      </button>
    </form>
  );
};

export default ContactForm;
