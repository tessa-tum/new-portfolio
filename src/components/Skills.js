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

          <div className='text-lg grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 w-full mx-auto my-auto'>
            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Javascript</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >React</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Tailwind</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Bootstrap</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >HTML</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >CSS</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >SCSS</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Node.js</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Express</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >React Native</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Typescript</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Angular</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >MongoDB</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >Git</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >VS Code</p>
              </div>
            </div>

            <div className='bg-mediumblue shadow-md shadow-[black] text-center rounded-md'>
              <div className="mx-6 my-4">
                <p >WordPress</p>
              </div>
            </div>

          </div >
          <p className="text-lg mt-16"><span className="text-green">6+</span> years experience in strategic analysis and project management.
          </p>
        </div>
        <div className="skills-img">
          <img
            src={suareBracketsSkills}
            alt="placeholder-img"
            className="mr-auto ml-auto mt-auto lg:w-40 xl:w-60 hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
