import React from "react";
import suareBracketsSkills from "../assets/square-brackets-skills.svg";

const Skills = () => {
  return (
    <section id="skills" className="px-9 sm:px-16 py-32 text-white">
      <div className="container mx-auto grid lg:grid-cols-2 items-center">
        <div className="skills-info">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-green">Skills</h2>
          <p className="mb-12 text-lg">
            Here is a list of some of the technologies I've worked with.
          </p>

          <div className='text-lg grid grid-cols-2 sm:grid-cols-4 gap-5 w-full'>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >HTML</p>
                <p className="text-green">+++</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >CSS</p>
                <p className="text-green">+++</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >SCSS</p>
                <p className="text-green">+++</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Javascript</p>
                <p className="text-green">++</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Typescript</p>
                <p className="text-green">+</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >React</p>
                <p className="text-green">++</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >React Native</p>
                <p className="text-green">+</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Angular</p>
                <p className="text-green">+</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Bootstrap</p>
                <p className="text-green">++</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Tailwind</p>
                <p className="text-green">++</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Node.js</p>
                <p className="text-green">+</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Express.js</p>
                <p className="text-green">+</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >MongoDB</p>
                <p className="text-green">+</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Git</p>
                <p className="text-green">++</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >VS Code</p>
                <p className="text-green">++</p>
              </div>
            </div>
          </div >

          <p className="text-lg mt-16"><span className="text-green">6+</span> years project management experience</p>
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