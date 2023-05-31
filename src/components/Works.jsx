import React from "react";
import westFinder from "../assets/projects/westfinder.png";
import travel from "../assets/projects/travel.png";
import game from "../assets/projects/game.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Works = () => {
  return (
    <div id="works" className="container mx-auto pt-24 lg:pt-28 xl:pt-32">
      <div className="container mx-auto">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase">My Works</h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
          </span>
          <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5">
            Works
          </span>
        </div>

        <div
          className="mt-12 grid grid-cols-6 gap-7"
          style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
        >
          <div
            className="col-span-6 sm:col-span-3 lg:col-span-2"
            style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
          >
            <div className="portfolio card hovercard group p-4 md:p-5">
              <div className="portfolio-top relative overflow-hidden">
                <div className="portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur">
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
                        padding: "69.8182% 0px 0px",
                      }}
                    ></span>
                    <img
                      src={travel}
                      alt="travel"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </span>
                </div>
                <div className="portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 group-hover:translate-x-0">
                  <a
                    href="https://github.com/ghiurcogabriel/Travel-App"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-20 min-h-0 w-20 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey"
                  >
                    <FaGithub size={50} />
                  </a>
                  <a
                    href="https://travel-app-gg.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-20 min-h-0 w-20 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="portfolio-content mt-4">
                <h4>Travel App</h4>
                <p>
                  A website where you can search for reastaurants, hotels and
                  attractions. Created with ReactJs using Google Maps api for locations.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-span-6 sm:col-span-3 lg:col-span-2"
            style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
          >
            <div className="portfolio card hovercard group p-4 md:p-5">
              <div className="portfolio-top relative overflow-hidden">
                <div className="portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur">
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
                        padding: "69.8182% 0px 0px",
                      }}
                    ></span>
                    <img
                      src={game}
                      alt="game"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </span>
                </div>
                <div className="portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 group-hover:translate-x-0">
                  <a
                    href="https://github.com/ghiurcogabriel/Memory-Game-and-Recipe-List"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-20 min-h-0 w-20 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey"
                  >
                    <FaGithub size={50} />
                  </a>
                  <a
                    href="https://memory-game-and-cooking-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-20 min-h-0 w-20 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="portfolio-content mt-4">
                <h4>Memory game and Recipe App</h4>
                <p>
                  A momory game app and recipe app, both in the same website. Crated with ReactJs and hosted in Goodgle Firebase.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-span-6 sm:col-span-3 lg:col-span-2"
            style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
          >
            <div className="portfolio card hovercard group p-4 md:p-5">
              <div className="portfolio-top relative overflow-hidden">
                <div className="portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur">
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
                        padding: "69.8182% 0px 0px",
                      }}
                    ></span>
                    <img
                      src={westFinder}
                      alt="poza"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </span>
                </div>
                <div className="portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 group-hover:translate-x-0">
                  <a
                    href="https://github.com/ghiurcogabriel/WestFinder"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-20 min-h-0 w-20 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey"
                  >
                    <FaGithub size={50} />
                  </a>
                  <a
                    href="https://westfinder.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-20 min-h-0 w-20 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="portfolio-content mt-4">
                <h4>WestFinder</h4>
                <p>E-Commerce website, with categories for mens and womens, hosted in Google Firebase and build with ReactJs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
