"use client";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { IoMdSend } from "react-icons/io";

const MAX_MESSAGE = 1000;

type FieldProps = {
  index: string;
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
};

const fieldShell =
  "peer block w-full resize-none bg-transparent pb-3 pt-7 text-lg text-primaryText caret-accent focus:outline-none";

const labelShell =
  "pointer-events-none absolute left-0 top-6 origin-left text-lg text-secondaryText transition-all duration-200 ease-out peer-focus:top-0 peer-focus:text-xs peer-focus:font-medium peer-focus:tracking-wide peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:tracking-wide";

const Underline = () => (
  <>
    <span className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
    <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-accent/20 transition-transform duration-300 ease-out peer-focus-within:scale-x-100" />
  </>
);

const Field = ({
  index,
  id,
  name,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: FieldProps) => (
  <div className="group relative">
    <input
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      placeholder=" "
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={fieldShell}
    />
    <label htmlFor={id} className={labelShell}>
      {label}
    </label>
    <span className="pointer-events-none absolute right-0 top-0 font-mono text-xs text-secondaryText/40 transition-colors duration-200 peer-focus-within:text-accent/70">
      {index}
    </span>
    <Underline />
  </div>
);

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || isSending) return;
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please enter all fields.");
      return;
    }

    try {
      setIsSending(true);
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_OPTIONS_ID!,
      );

      toast.success("Message sent! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
      form.current.reset();
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-card mx-auto w-full max-w-[650px]">
      <form
        className="flex flex-col gap-7 rounded-2xl bg-white/[0.01] p-6 backdrop-blur-xl sm:p-8"
        onSubmit={handleSubmit}
        ref={form}
        noValidate
      >
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-secondaryText">
            Send a message
          </p>
        </div>

        <div className="flex flex-col gap-7 sm:flex-row sm:gap-6">
          <div className="flex-1">
            <Field
              index="01"
              id="name"
              name="user_name"
              label="Your name"
              value={name}
              onChange={setName}
              autoComplete="name"
            />
          </div>
          <div className="flex-1">
            <Field
              index="02"
              id="email"
              name="email"
              label="Email address"
              type="email"
              value={email}
              onChange={setEmail}
              autoComplete="email"
            />
          </div>
        </div>

        <div className="group relative">
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder=" "
            maxLength={MAX_MESSAGE}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={fieldShell}
          />
          <label htmlFor="message" className={labelShell}>
            Tell me about your project
          </label>
          <span className="pointer-events-none absolute right-0 top-0 font-mono text-xs text-secondaryText/40 transition-colors duration-200 peer-focus-within:text-accent/70">
            03
          </span>
          <Underline />
          <span
            className={`absolute -bottom-6 right-0 font-mono text-xs transition-colors duration-200 ${
              message.length > MAX_MESSAGE - 50
                ? "text-accent"
                : "text-secondaryText/40"
            }`}
          >
            {message.length}/{MAX_MESSAGE}
          </span>
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="group relative mt-4 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent px-4 py-4 font-semibold uppercase tracking-wide text-primaryBackground transition-transform duration-200 ease-out hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {/* shine sweep on hover */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          {isSending ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-primaryBackground/30 border-t-primaryBackground" />
              <span className="relative">Sending…</span>
            </>
          ) : (
            <>
              <span className="relative">Send Message</span>
              <IoMdSend className="relative transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
