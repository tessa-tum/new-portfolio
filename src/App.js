import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ToTopScroll from "./components/ToTopScroll";
import Home from "./homepage/Home";
import Casestudy from "./homepage/Casestudy";
import Footer from "./components/Footer";
import Legal from "./components/Legal";

const App = () => {
  return (
    <div>
      <Header />
      <ToTopScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="casestudy" element={<Casestudy />} />
      </Routes>
      <Footer />
      <Legal />
    </div>
  );
}
export default App;
