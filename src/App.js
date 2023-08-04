import "./App.css";
import Header from "./components/Header";
import ToTopScroll from "./components/ToTopScroll";
import Stage from "./components/Stage";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App= () => {
  return (
    <div>
      <Header />
      <ToTopScroll />
      <Stage />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </div>
  );
}
export default App;
