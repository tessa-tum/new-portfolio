import React, { useState, useEffect } from "react";
import { LiaAngleDoubleUpSolid } from "react-icons/lia";
import "../App.css";

const ToTopScroll = () => {
  const [showToTopBtn, setShowToTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowToTopBtn(true);
      } else {
        setShowToTopBtn(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="btn-to-top">
      {" "}
      {showToTopBtn && (
        <LiaAngleDoubleUpSolid
          className="triangle-position triangle-style"
          onClick={scrollToTop}
        />
      )}{" "}
    </div>
  );
};
export default ToTopScroll;
