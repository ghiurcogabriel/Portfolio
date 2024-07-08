import React from "react";
import SectionTitle from "../common/SectionTitle";

const Tech = () => {
  return (
    <div id="skills" className="container mx-auto pt-24 lg:pt-28 xl:pt-32">
      <SectionTitle topText="My Skills" behindText="Skills" />

      <div className="skills-wrapper">
        <div className="grid grid-cols-3 gap-10 ml-10 ">
          <div
            className="col-span-4 sm:col-span-2 lg:col-span-1 max-w-xs	"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="circleprogress card hovercard relative p-4 text-center md:p-5">
              <div className="relative mb-2 inline-block text-primary">
                <svg
                  className="circle"
                  width={120}
                  height={120}
                  viewBox="0 0 120 120"
                >
                  <circle
                    className="circlebg"
                    cx={60}
                    cy={60}
                    r={54}
                    strokeLinecap="round"
                    pathLength={1}
                    strokeWidth={12}
                  />
                  <circle
                    cx={60}
                    cy={60}
                    r={54}
                    strokeLinecap="round"
                    strokeWidth={12}
                    opacity={1}
                    strokeDashoffset={0}
                    strokeDasharray={"0.65px 1px"}
                    pathLength={1}
                  />
                </svg>
                <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-body">
                  65%
                </span>
              </div>
              <h5>Front-End Developer</h5>
            </div>
          </div>

          <div
            className="col-span-4 sm:col-span-2 lg:col-span-1 max-w-xs"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="circleprogress card hovercard relative p-4 text-center md:p-5">
              <div className="relative mb-2 inline-block text-primary">
                <svg
                  className="circle"
                  width={120}
                  height={120}
                  viewBox="0 0 120 120"
                >
                  <circle
                    className="circlebg"
                    cx={60}
                    cy={60}
                    r={54}
                    strokeLinecap="round"
                    pathLength={1}
                    strokeWidth={12}
                  />
                  <circle
                    cx={60}
                    cy={60}
                    r={54}
                    strokeLinecap="round"
                    strokeWidth={12}
                    opacity={1}
                    strokeDashoffset={0}
                    strokeDasharray={"0.4px 1px"}
                    pathLength={1}
                  />
                </svg>
                <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-body">
                  40%
                </span>
              </div>
              <h5>Beck-End Development</h5>
            </div>
          </div>

          <div
            className="col-span-4 sm:col-span-2 lg:col-span-1 max-w-xs"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="circleprogress card hovercard relative p-4 text-center md:p-5">
              <div className="relative mb-2 inline-block text-primary">
                <svg
                  className="circle"
                  width={120}
                  height={120}
                  viewBox="0 0 120 120"
                >
                  <circle
                    className="circlebg"
                    cx={60}
                    cy={60}
                    r={54}
                    strokeLinecap="round"
                    pathLength={1}
                    strokeWidth={12}
                  />
                  <circle
                    cx={60}
                    cy={60}
                    r={54}
                    strokeLinecap="round"
                    strokeWidth={12}
                    opacity={1}
                    strokeDashoffset={0}
                    strokeDasharray={"0.50px 1px"}
                    pathLength={1}
                  />
                </svg>
                <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-body">
                  50%
                </span>
              </div>
              <h5>UI/UX Design</h5>
            </div>
          </div>
        </div>
        <div className="py-7"></div>
        <div className="grid grid-cols-2 gap-7">
          <div className="col-span-2 md:col-span-1">
            <div className="progress">
              <h5 className="mb-4">
                JavaScript{" "}
                <span style={{ color: "rgb(114 226 174)", opacity: 0.8 }}>
                  75%
                </span>
              </h5>
              <div className="progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20">
                <span
                  className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                  style={{
                    width: "75%",
                    transform: "none",
                    transformOrigin: "0% 50% 0px",
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="progress">
              <h5 className="mb-4">
                ReactJs{" "}
                <span style={{ color: "rgb(114 226 174)", opacity: 0.8 }}>
                  70%
                </span>
              </h5>
              <div className="progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20">
                <span
                  className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                  style={{
                    width: "70%",
                    transform: "none",
                    transformOrigin: "0% 50% 0px",
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="progress">
              <h5 className="mb-4">
                HTML{" "}
                <span style={{ color: "rgb(114 226 174)", opacity: 0.8 }}>
                  90%
                </span>
              </h5>
              <div className="progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20">
                <span
                  className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                  style={{
                    width: "95%",
                    transform: "none",
                    transformOrigin: "0% 50% 0px",
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="progress">
              <h5 className="mb-4">
                CSS, SCSS{" "}
                <span style={{ color: "rgb(114 226 174)", opacity: 0.8 }}>
                  85%
                </span>
              </h5>
              <div className="progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20">
                <span
                  className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                  style={{
                    width: "85%",
                    transform: "none",
                    transformOrigin: "0% 50% 0px",
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="progress">
              <h5 className="mb-4">
                Tailwind{" "}
                <span style={{ color: "rgb(114 226 174)", opacity: 0.8 }}>
                  55%
                </span>
              </h5>
              <div className="progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20">
                <span
                  className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                  style={{
                    width: "55%",
                    transform: "none",
                    transformOrigin: "0% 50% 0px",
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="progress">
              <h5 className="mb-4">
                Firebase{" "}
                <span style={{ color: "rgb(114 226 174)", opacity: 0.8 }}>
                  50%
                </span>
              </h5>
              <div className="progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20">
                <span
                  className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                  style={{
                    width: "50%",
                    transform: "none",
                    transformOrigin: "0% 50% 0px",
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="progress">
              <h5 className="mb-4">
                Figma{" "}
                <span style={{ color: "rgb(114 226 174)", opacity: 0.8 }}>
                  45%
                </span>
              </h5>
              <div className="progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20">
                <span
                  className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                  style={{
                    width: "45%",
                    transform: "none",
                    transformOrigin: "0% 50% 0px",
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="progress">
              <h5 className="mb-4">
                NodeJs{" "}
                <span style={{ color: "rgb(114 226 174)", opacity: 0.8 }}>
                  35%
                </span>
              </h5>
              <div className="progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20">
                <span
                  className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                  style={{
                    width: "35%",
                    transform: "none",
                    transformOrigin: "0% 50% 0px",
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
