import React from "react";
import tagBracketsAbout from "../assets/tag-brackets-about.svg"

const About = () => {
  return (
    <section id="about" className="bg-mediumblue px-9 sm:px-16 py-32 text-white">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-tang">About me
          </h2>

          <p className="pb-5 text-lg">
            As a freshly trained fullstack web developer, I take great pleasure in
            merging my previous experience of 6+ years in political communications
            with my new <span className="text-tang">passion for building things for the web</span>.
          </p>
          <p className="pb-5 text-lg">
            Formerly, I have worked with <span className="text-tang">stakeholders of all backgrounds</span>, for example the German government,
            political foundations and NGOs, to identify pain points in their (mostly digital) communication efforts
            and how to smooth them out.
          </p>
          <p className="pb-5 text-lg">
            Lately, I decided to pursue a dream of mine and enrolled in CareerFoundry's <span className="text-tang">Full-Stack Web 
            Development Program</span>, to learn about JavaScript, Typescript, React, Angular ... and much more.
          </p>
          <p className="pb-5 text-lg">
            Now I am eager to <span className="text-tang">develop more software</span> and to keep working as a
              detail-oriented web developer with a wide-angle view on all parts of the development process.
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