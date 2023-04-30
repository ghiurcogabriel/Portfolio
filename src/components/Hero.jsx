import React from "react";
import profile from "../assets/profile.jpg";
import "../index.css";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaLongArrowAltDown } from "react-icons/fa";

const Hero = () => {
  const typeAnimation = (
    <TypeAnimation
      sequence={[
        // Same String at the start will only be typed once, initially
        // 'We produce food for Mice',
        1000,
        "Gabriel Ghiurco",
        1000,
        "Front-End Developer",
        1000,
        "Full-Stack Developer",
        1000,
        "Web Designer",
        1000,
      ]}
      speed={50}
      style={{ fontSize: "2em", color: "#72E2AE" }}
      repeat={Infinity}
    />
  );
  return (
    <div className="herosection relative overflow-hidden">
      <div className="herosection-content relative z-20 bg-grey-darken  bg-opacity-20">
        <div className="container relative mx-auto">
          <div className="flex min-h-screen w-full items-center justify-center">
            <div className="herosection-content w-full py-20 text-center md:w-3/4">
              <div className="herosection-imagewrapper relative mb-5 inline-block overflow-hidden rounded-full align-middle">
                <span className="herosection-imageanimation absolute left-0 top-0 z-10 h-full w-full animate-spin rounded-full bg-gradient-to-tr from-primary to-transparent"></span>
                <div className="herosection-image fiximage relative z-20 inline-block h-[250px] w-[250px] overflow-hidden rounded-full border-6 border-primary border-opacity-10 align-middle">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "100% 0px 0px",
                      }}
                    ></span>
                    <img
                      src={profile}
                      alt=""
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                      }}
                    />
                  </span>
                </div>
              </div>
              <h1
                className="mb-5 text-heading"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="block sm:inline text-4xl">Hi! I'm </span>
                <span className="text-white">
                  <span style={{ color: "#72E2AE" }}>{typeAnimation}</span>
                  <span className="typed-cursor typed-cursor--blink"></span>
                </span>
              </h1>
              <p
                className="lead mb-0"
                style={{ opacity: 1, transform: "none" }}
              >
                I am a full-stack web developer. I am an open-minded person,
                friendly and excited about learning something new. I am a
                self-taught developer with more than one year of self-learning.
              </p>

              {/* middle section */}
              <div className="herosection-socialicons mt-7 text-center">
                <ul className="mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4">
                  <li className="inline-block align-middle">
                    <a
                      href="facebook.com"
                      target="_blank"
                      className="group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
                    >
                      <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                        <FaFacebookSquare />
                      </span>
                      <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                        <FaFacebookSquare />
                      </span>
                    </a>
                  </li>
                  <li className="inline-block align-middle">
                    <a
                      href="facebook.com"
                      target="_blank"
                      className="group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
                    >
                      <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                        <FaGithubSquare />
                      </span>
                      <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                        <FaGithubSquare />
                      </span>
                    </a>
                  </li>
                  <li className="inline-block align-middle">
                    <a
                      href="facebook.com"
                      target="_blank"
                      className="group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
                    >
                      <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                        <FaInstagramSquare />
                      </span>
                      <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                        <FaInstagramSquare />
                      </span>
                    </a>
                  </li>
                  <li className="inline-block align-middle">
                    <a
                      href="facebook.com"
                      target="_blank"
                      className="group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
                    >
                      <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                        <FaLinkedin />
                      </span>
                      <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                        <FaLinkedin />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* bottom section */}
              <div className="herosection-bottom absolute left-0 top-auto bottom-10 w-full justify-between text-center">
                  <a href="#about" className="cursor-pointer text-s font-medium uppercase tracking-widest transition-all hover:text-primary flex items-center justify-center">
                    <FaLongArrowAltDown className="mr-3 bounce2" size={15}/>
                    <span>Scroll down</span>
                  </a>
              </div>
            </div>
          </div>
          <div className="herosection-bottom absolute left-0 top-auto bottom-10 w-full justify-between text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
