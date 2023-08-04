import React from "react";
import tagBracketsAbout from "../assets/tag-brackets-about.svg";

const About = () => {
  return (
    <section id="about" className="bg-mediumblue px-9 sm:px-16 py-32 text-white">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-tang">About me
          </h2>

          <p className="pb-5 text-lg">
            As a  <span className="text-tang">freshly trained full-stack web developer</span>, I find great joy in combining my previous
            experience of over 6 years in political communications with my newfound
            passion for web development.
          </p>
          <p className="pb-5 text-lg">
            <span className="text-tang">Previously</span>, I had the opportunity to collaborate with stakeholders of all backgrounds,
            including the German government, political foundations and NGOs, where I honed my skills in identifying pain points
            within their digital communication efforts and implementing effective solutions.
          </p>
          <p className="pb-5 text-lg">
            <span className="text-tang">Recently</span>, I decided to pursue a dream of mine and enrolled in CareerFoundry's Full-Stack Web
            Development Program. Through this program, I have gained expertise in JavaScript, TypeScript, React, Angular,
            and a range of other technologies.
          </p>
          <p className="pb-5 text-lg">
            <span className="text-tang">Now </span>I am eager to further expand my software development skills and continue working
            as a detail-oriented developer who approaches projects with a comprehensive understanding of the development process.
          </p>
        </div>

        <div className="about-img">
          <img
            src={tagBracketsAbout}
            alt="placeholder-img"
            className="mr-auto ml-auto mt-auto md:w-40 lg:w-60 xl:w-60 hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
