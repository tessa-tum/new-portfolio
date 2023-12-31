import React from "react";
import curlyBracketsStage from "../assets/curly-brackets-stage.svg";
import { BsArrowRight } from 'react-icons/bs';

const Stage = () => {
  return (
    <section id="stage" className="px-9 sm:px-16 py-32 text-white">
      <div className="container mx-auto grid lg:grid-cols-2 items-center justify-center md:justify-between">
        <div className="stage-info md:pb-0">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-5xl xl:text-6xl tracking-tight leading-tight mb-8 sm:mb-12">
            Hello! <br />
            I'm <span className="text-lightblue">Tessa</span>, a full-stack web developer based in Berlin, Germany.
          </h1>

          <p className="text-lg mb-10">
            With a diverse range of skills and experience, I am deeply passionate about building things for the web.
          </p>

          <a
            href="/#projects"
            className="group text-lightblue text-lg w-fit px-6 py-3 my-2 flex items-center border-lightblue border 
            rounded-md cursor-pointer hover:bg-white hover:text-darkblue hover:border-white"
          >
            View projects
            <span className="group-hover:rotate-90 duration-300">
              <BsArrowRight size={25} className="ml-3" />
            </span>
          </a>
        </div>

        <div className="stage-img">
          <img
            src={curlyBracketsStage}
            alt="placeholder-img"
            className="mr-auto ml-auto mt-auto md:w-40 xl:w-60 hidden lg:flex animate-spin-slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Stage;
