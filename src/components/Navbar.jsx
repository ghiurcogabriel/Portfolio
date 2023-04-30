import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scroll, setScroll] = useState(false);

  const divRef = useRef();

  const handleScroll = (e) => {
    const scrolledFromTop = divRef.current.scrollTop;
    console.log(scrolledFromTop);
    setScroll(scrolledFromTop > 10);
  };

  return (
    <header
      className={
        "header top-0 left-0 z-50 h-auto w-full fixed animate-slidedown border-b border-white border-opacity-20 bg-grey bg-opacity-80 backdrop-blur backdrop-filter"
      }
    >
      <div className="container mx-auto" onScroll={handleScroll} ref={divRef}>
        <div className="container mx-auto">
          <div className="header-inner flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt="logo" className="w-30 h-16" />
            </Link>
            <div className="mobilenav"></div>
            <div className="header-nav hidden lg:block">
              <nav className="flex-grow px-5 text-center text-white">
                <ul className="mb-0 inline-flex list-none gap-7 pl-0">
                  <li className="inline-block align-middle px-5">
                    <a
                      href="/"
                      className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary "
                    >
                      Home
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                  <li className="inline-block align-middle px-5">
                    <a
                      href="#about"
                      className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                    >
                      About
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                  <li className="inline-block align-middle px-5">
                    <a
                      href="#resume"
                      className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                    >
                      Resume
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                  <li className="inline-block align-middle px-5">
                    <a
                      href="#works"
                      className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                    >
                      Works
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                  <li className="inline-block align-middle px-5">
                    <a
                      href="#contact"
                      className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                    >
                      Contact
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-button hidden lg:block">
              <span className="btn"> <a href="#contact"> Contact Me </a></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
