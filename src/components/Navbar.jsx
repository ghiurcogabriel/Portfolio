import React, { useState } from "react";
import { logo, menu, close } from "../assets";
import "./Navbar.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  console.log(showNav);

  return (
    <header
      className={
        "header top-0 left-0 z-50 h-auto w-full fixed animate-slidedown border-b border-white border-opacity-20 bg-grey bg-opacity-80 backdrop-blur backdrop-filter"
      }
    >
      <div className="container mx-auto">
        <div className="container mx-auto">
          <div className="header-inner flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-30 h-16" />
            </a>

            {/* mobile navbar */}
            <button className="btn btn-small btn-transparent px-3 text-3xl burger-button" onClick={() => setShowNav(!showNav)}>
              <img src={menu} alt="burger" className="b"  />
            </button>
            {showNav && (
              <div className="header-mobilenav block lg:hidden" data-aos="fade-in">
                <div
                  className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-blue p-4 text-center trans"
                 
                >
                  <button className="btn btn-small btn-transparent absolute left-auto right-4 top-4 z-10 h-10 w-10 rounded-full p-0 text-center text-3xl" onClick={() => setShowNav(!showNav)}>
                    <img src={close} alt="close" />
                  </button>
                  <nav className="relative max-h-full w-full overflow-y-auto">
                    <ul className="mb-0 list-none pl-0">
                      <li className="block" onClick={() => setShowNav(!showNav)}>
                        <a
                          href="/"
                          className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary "
                        >
                          Home
                          <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                        </a>
                      </li>
                      <li className="block" onClick={() => setShowNav(!showNav)}>
                        <a
                          href="#about"
                          className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                        >
                          About
                          <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                        </a>
                      </li>
                      <li className="block" onClick={() => setShowNav(!showNav)}>
                        <a
                          href="#resume"
                          className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                        >
                          Resume
                          <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                        </a>
                      </li>
                      <li className="block" onClick={() => setShowNav(!showNav)}>
                        <a
                          href="#works"
                          className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                        >
                          Works
                          <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                        </a>
                      </li>
                      <li className="block" onClick={() => setShowNav(!showNav)}>
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
              </div>
            )}

            {/* large screen navbar */}
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
              <span className="btn">
                {" "}
                <a href="#contact"> Contact Me </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
