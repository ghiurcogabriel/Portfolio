import React from "react";
import { FaBook, FaHardHat } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="resume" className="container mx-auto pt-24 lg:pt-28 xl:pt-32">
      <div className="container mx-auto">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase">Experience</h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
          </span>
          <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5">
            Experience
          </span>
        </div>

        <div className="grid grid-cols-2 gap-14 lg:gap-7">
          <div className="col-span-2 lg:col-span-1">
            <div className="education-timeline">
              <h4 className="flex items-center"> <FaBook className="mr-5" size={25}/> Educational Qualification</h4>

              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">2016-2019</span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full z-10 bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">High school</h5>
                    <p className="mb-2 text-heading">Baia Mare</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quos sit possimus porro iste nihil voluptate provident itaque ea cum quas ratione, laborum blanditiis libero, ut soluta suscipit commodi animi!</p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">2016-2019</span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full z-10 bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">High school</h5>
                    <p className="mb-2 text-heading">Baia Mare</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quos sit possimus porro iste nihil voluptate provident itaque ea cum quas ratione, laborum blanditiis libero, ut soluta suscipit commodi animi!</p>
                  </div>
                </div>
              </div>
              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">2016-2019</span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full z-10 bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">High school</h5>
                    <p className="mb-2 text-heading">Baia Mare</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quos sit possimus porro iste nihil voluptate provident itaque ea cum quas ratione, laborum blanditiis libero, ut soluta suscipit commodi animi!</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-span-2 lg:col-span-1">
          <div className="education-timeline">
              <h4 className="flex items-center"> <FaHardHat className="mr-5" size={25}/> Educational Qualification</h4>

              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">2016-2019</span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full z-10 bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">High school</h5>
                    <p className="mb-2 text-heading">Baia Mare</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quos sit possimus porro iste nihil voluptate provident itaque ea cum quas ratione, laborum blanditiis libero, ut soluta suscipit commodi animi!</p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">2016-2019</span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full z-10 bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">High school</h5>
                    <p className="mb-2 text-heading">Baia Mare</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quos sit possimus porro iste nihil voluptate provident itaque ea cum quas ratione, laborum blanditiis libero, ut soluta suscipit commodi animi!</p>
                  </div>
                </div>
              </div>
              <div className="timeline-wrap">
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">2016-2019</span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey"></span>
                      <span className="absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full z-10 bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                    </span>
                    <h5 className="mb-0 text-primary">High school</h5>
                    <p className="mb-2 text-heading">Baia Mare</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quos sit possimus porro iste nihil voluptate provident itaque ea cum quas ratione, laborum blanditiis libero, ut soluta suscipit commodi animi!</p>
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
