import React from "react";
import Stage from "../components/Stage"
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Stage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
export default Home;