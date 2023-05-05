import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="herosection-socialicons mt-7 text-center">
    <ul className="mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4">
      <li className="inline-block align-middle">
        <a
          href="https://www.facebook.com/gabriel.ghiurco.3/"
          rel='noreferrer'
          target="_blank"
          className="group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
        >
          <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
            <FaFacebookSquare size={30}/>
          </span>
          <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
            <FaFacebookSquare size={30}/>
          </span>
        </a>
      </li>
      <li className="inline-block align-middle">
        <a
          href="https://github.com/ghiurcogabriel?tab=repositories"
          rel='noreferrer'
          target="_blank"
          className="group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
        >
          <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
            <FaGithubSquare size={30}/>
          </span>
          <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
            <FaGithubSquare size={30}/>
          </span>
        </a>
      </li>
      <li className="inline-block align-middle">
        <a
          href="https://www.instagram.com/gabrielghiurco/"
          rel='noreferrer'
          target="_blank"
          className="group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
        >
          <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
            <FaInstagramSquare size={30}/>
          </span>
          <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
            <FaInstagramSquare size={30}/>
          </span>
        </a>
      </li>
      <li className="inline-block align-middle">
        <a
          href="https://www.linkedin.com/in/ghiurco-gabriel-367847188/"
          rel='noreferrer'
          target="_blank"
          className="group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
        >
          <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
            <FaLinkedin size={30}/>
          </span>
          <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
            <FaLinkedin size={30}/>
          </span>
        </a>
      </li>
    </ul>
  </div>
  )
}

export default SocialMedia