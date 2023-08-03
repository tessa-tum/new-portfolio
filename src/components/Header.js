import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-6 bg-darkblue fixed w-full z-10">
      <a href="/" className="logo text-xl font-bold text-lightblue">
        tessa tumbraegel
      </a>

      {/* desktop menu */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>

          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* mobile menu */}
      <nav
        className={!toggle ? "mobile-nav left-[100%]" : "mobile-nav right-0"}
      >
        <ul className="flex flex-col gap-4 px-2">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} color={'#cbd5e1'} /> : <AiOutlineClose size={30} color={'#cbd5e1'} />}
      </button>
    </header>
  );
};

export default Header;