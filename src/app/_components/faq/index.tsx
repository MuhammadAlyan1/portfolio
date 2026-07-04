import React from "react";
import { faqs } from "@/data/faq";

const FAQ = () => {
  return (
    <section id="faq" className="mx-auto mt-20 max-w-screen-2xl px-8 pt-8">
      <h2 className="mb-14 text-center text-5xl font-medium md:text-7xl">
        FAQ
      </h2>
      <div className="mx-auto max-w-[80ch] divide-y divide-secondaryBackground border-y border-secondaryBackground">
        {faqs.map((faq) => {
          return (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-medium text-primaryText transition-colors duration-200 ease-in-out hover:text-accent sm:text-xl [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="text-2xl font-light text-accent transition-transform duration-200 ease-in-out group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="pb-6 text-base text-secondaryText sm:text-lg">
                {faq.lines ? (
                  <ul className="flex flex-col gap-2">
                    {faq.lines.map((line) => {
                      return (
                        <li key={line.label ?? line.text}>
                          {line.label && (
                            <span className="font-semibold text-primaryText">
                              {line.label}:{" "}
                            </span>
                          )}
                          {line.text}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
