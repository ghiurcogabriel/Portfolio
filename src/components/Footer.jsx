import React from "react";
import SocialMedia from "../common/SocialMedia";

const Footer = () => {
  return (
    <footer className="footer relative z-20 border-t border-white border-opacity-10 bg-grey bg-opacity-95 backdrop-blur backdrop-filter">
      <div className="container mx-auto">
        <div className="footer-content flex flex-wrap items-center justify-between gap-y-5 gap-x-7 py-5 text-center md:flex-nowrap">
          <div className="w-full md:w-auto">
            <SocialMedia />
          </div>
          <p>&copy; 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
