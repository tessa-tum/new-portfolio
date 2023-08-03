import React from "react";
import suareBracketsSkills from "../assets/square-brackets-skills.svg";

const Skills = () => {
  return (
    <section id="skills" className="px-9 sm:px-16 py-32 text-white">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center sm:justify-between">
      <div className="skills-info">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-green">Skills</h2>
        
        <div className="grid w-full grid-cols-[repeat(auto-fill,9rem)] gap-x-24 gap-y-8 text-lg leading-loose">
          <ul>
            <li>HTML <span className="text-green">+++</span></li>
            <li>CSS <span className="text-green">+++</span></li>
            <li>SCSS <span className="text-green">+++</span></li>
            <li>Javascript <span className="text-green">++</span></li>
            <li>Typescript <span className="text-green">+</span></li>
          </ul>
          <ul>
            <li>React <span className="text-green">++</span></li>
            <li>React Native <span className="text-green">+</span></li>
            <li>Angular <span className="text-green">+</span></li>
            <li>Bootstrap <span className="text-green">++</span></li>
            <li>Tailwind CSS <span className="text-green">+</span></li>
          </ul>
          <ul>
            <li>Node.js <span className="text-green">+</span></li>
            <li>Express.js <span className="text-green">+</span></li>
            <li>MongoDB <span className="text-green">+</span></li>
            <li>Git <span className="text-green">++</span></li>
            <li>VSCode <span className="text-green">++</span></li>
          </ul>
        </div>
        <p className="pb-5 pt-10 text-lg"><span className="text-green">6+</span> years project management experience</p>
        </div>

        <div className="skills-img">
          <img
          src={suareBracketsSkills}
            alt="placeholder-img"
            className="mr-auto ml-auto mt-auto md:w-40 lg:w-60 xl:w-60 hidden lg:flex"
          />
        </div>

        </div>
      </section>
  );
};

export default Skills;