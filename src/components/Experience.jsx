import React from "react";
import { FaBook, FaHardHat } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";

const Experience = () => {
  return (
    <div id="resume" className="container mx-auto pt-24 lg:pt-28 xl:pt-32">
      <div className="container mx-auto">
        <SectionTitle topText="Experience" behindText="Experience" />

        <div className="grid grid-cols-2 gap-14 lg:gap-7">
          <div className="col-span-2 lg:col-span-1">
            <div className="education-timeline">
              <h4 className="flex items-center">
                <FaBook className="mr-5" size={25} /> Educational Qualification
              </h4>

              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2020-2020
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">
                      The Informatical School of IT
                    </h5>
                    <p className="mb-2 text-heading">Cluj-Napoca</p>
                    <p>
                      I learned about Tourism Geography and a lot of cool things
                      obout the Geography and Earth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2016-2019
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">Faculty of Geography</h5>
                    <p className="mb-2 text-heading">Cluj-Napoca</p>
                    <p>
                      Learning the Geography of Tourism at University Babes
                      Bolyai, Faculty of Geography in Cluj-Napoca, Romania.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2012-2016
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">Economic High school</h5>
                    <p className="mb-2 text-heading">Baia Mare</p>
                    <p>Public Alimentation and Tourism</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <div className="education-timeline">
              <h4 className="flex items-center">
                <FaHardHat className="mr-5" size={25} /> Professional Experience
              </h4>

              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2023-Present
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">Full-Stack Developer</h5>
                    <p className="mb-2 text-heading">HEITS Digital</p>
                    <p>
                      • Cluj-Napoca, Romania
                      <br /> • Developing internal projects used by the entire
                      organization. <br />
                      • Working on world large scale projects. <br /> 
                      • Developing and maintaining the company's website. <br />
                      • Developing and maintaining the company's internal tools. <br />
                      • Writing unit tests. <br />
                      • Writing documentation. <br />
                      Tech Stack: React, Typescript, NextJs, Node.js, Express, NestJs, MongoDB, MySQL, Docker, Kubernetes, AWS, Git, Jira, CircleCI, Jest, Postman, Swagger, Figma, MaterialUI and many more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2021-2023
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">QA Software Engineer</h5>
                    <p className="mb-2 text-heading">Alight.EE</p>
                    <p>
                      • Cluj-Napoca, Romania
                      <br /> • Performing testing tasks. <br />
                      • Reports existing bugs or problems. <br /> • Verify
                      functionality prior to certification. <br /> • Evaluate
                      the functionality on different platforms. <br /> • Create
                      test cases and participate to the app implementation
                      processes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2021-2021
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">QA Analyst</h5>
                    <p className="mb-2 text-heading">Quantic Lab</p>
                    <p>
                      • Cluj-Napoca, Romania Quantic Lab. <br />
                      • Performing testing tasks. <br />
                      • Reports existing bugs or problems. <br />
                      • Verify functionality prior to certification. <br />•
                      Evaluate the functionality on different platforms. <br />
                      • Make a daily report on the project. <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2020-2021
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">Salex Consultant</h5>
                    <p className="mb-2 text-heading">Altex Romania</p>
                    <p>
                      • Cluj-Napoca, Romania Altex Romania. <br />
                      • Advices about IT products and technical details. <br />•
                      Presentation of new products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
