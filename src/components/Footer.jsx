import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer relative z-20 border-t border-white border-opacity-10 bg-grey bg-opacity-95 backdrop-blur backdrop-filter">
      <div className="container mx-auto">
        <div className="footer-content flex flex-wrap items-center justify-between gap-y-5 gap-x-7 py-5 text-center md:flex-nowrap">
          <div className="w-full md:w-auto">
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
          <p>&copy; 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
