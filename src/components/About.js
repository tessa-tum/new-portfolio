import React from "react";
import tagBracketsAbout from "../assets/tag-brackets-about.svg";


const About = () => {
  return (
    <section id="about" className="bg-mediumblue px-9 sm:px-16 py-32 text-white">
      <div className="container mx-auto grid lg:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-tang">About me
          </h2>

          <p className="text-tang text-lg mb-3 flex">I am a certified web developer.</p>
          <p className="pb-8 text-lg">
            I completed a six-month full-stack web development course where I
            gained expertise in a range of technologies, including JavaScript, HTML, CSS, React, Git, Node/Express, and more. Feel free to check
            out some of my projects below!
          </p>

          <p className="text-tang text-lg mb-3 flex">I have a background in digital communication.</p>
          <p className="pb-8 text-lg">
            As a consultant, I have worked for 6+ years with clients from the public sector, helping them enhance their digital communication efforts.
            I have collaborated with teams of designers, developers and content creators to identify client needs
            and devise strategies and products that elevate their digital presence.
          </p>

          <p className="text-tang text-lg mb-3 flex">I am a lifelong learner and creative problem-solver.</p>
          <p className="pb-8 text-lg">
            Recently, I have transitioned into a more technical role driven by my passion for coding and creative problem-solving. I wanted to deepen my
            understanding of web development and learn how to build robust products from the start.
          </p>

          <p className="text-tang text-lg mb-3 flex">I have a cross-functional skill set.</p>
          <p className="text-lg">
            By combining my expertise in digital communication and web development, I offer a versatile skill set that spans technical expertise,
            analytical thinking and management skills. With this background, I am eager to co-create and implement new concepts
            alongside a dynamic development team.
          </p>
        </div>

        <div className="about-img">
          <img
            src={tagBracketsAbout}
            alt="placeholder-img"
            className="mr-auto ml-auto mt-auto lg:w-40 xl:w-60 hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
