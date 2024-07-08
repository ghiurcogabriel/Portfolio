import React from "react";
import profile from "../assets/profile.jpg";
import "../index.css";
import { TypeAnimation } from "react-type-animation";
import { FaLongArrowAltDown } from "react-icons/fa";
import SocialMedia from "../common/SocialMedia";

const Hero = () => {
  const typeAnimation = (
    <TypeAnimation
      sequence={[
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
                Motivated and versatile Full Stack Developer with more than 1 year of
                hands-on experience in building and maintaining web
                applications. Proficient in both front-end and back-end
                technologies including TypeScript, NextJs, Node.js, and
                MySql/PostgresSql. Eager to leverage my skills in coding,
                problem-solving, and continuous learning to contribute to
                innovative projects.
              </p>
              <SocialMedia />
              <div className="herosection-bottom absolute left-0 top-auto bottom-10 w-full justify-between text-center">
                <a
                  href="#about"
                  className="cursor-pointer text-s font-medium uppercase tracking-widest transition-all hover:text-primary flex items-center justify-center"
                >
                  <FaLongArrowAltDown className="mr-3 bounce2" size={15} />
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
