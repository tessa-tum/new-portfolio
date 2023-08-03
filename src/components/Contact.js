import React from "react";
import roundBracketsContact from "../assets/round-brackets-contact.svg"
import {
  PiLinkedinLogoThin,
  PiGithubLogoThin,
} from "react-icons/pi";

const Contact = () => {
  return (
    <section id="contact" className="px-9 sm:px-16 py-32 text-white">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">

        <div className="contact-info">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-pink">Contact me
          </h2>
          <p className="pb-5 mb-6 text-lg">
            I'm currently open to new opportunities in Berlin or remote.
            Feel free to write me an email.
          </p>
          <div>
            <a
              href="mailto:tessa.tumbraegel@protonmail.com"
              className=" btn font-mono text-lg text-white px-6 py-3 border-white border rounded-md hover:bg-white 
            hover:text-darkblue hover:border-white"
            >
              Send Email
            </a>
          </div>

          <p className="pb-5 text-lg mt-10 sm:mt-12">
            Or find me on:
          </p>

          <div className="flex">
            <a
              href="https://de.linkedin.com/in/tessa-tumbraegel"
              className="pr-4 inline-block text-pink hover:text-white"
            >
              {" "}
              <PiLinkedinLogoThin size={44} />{" "}
            </a>
            <a
              href="https://github.com/tessa-tum"
              className="pr-4 inline-block text-pink hover:text-white"
            >
              {" "}
              <PiGithubLogoThin size={44} />{" "}
            </a>
          </div>
        </div>

        <div className="contact-img">
          <img
          src={roundBracketsContact}
            alt="placeholder-img"
            className="mr-auto ml-auto mt-auto md:w-40 lg:w-60 xl:w-60 hidden lg:flex"
          />
        </div>


      </div>
    </section>
  );
};

export default Contact;