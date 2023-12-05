import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full bg-[#10107B] flex py-5 justify-center">
      <div className="flex flex-col items-center w-full text-white justify-center">
        <div className="text-lg mb-4 font-semibold">
          Husky<span className="text-primary"> Events</span>
        </div>
        <nav className="flex gap-4">
          <a href="/" className="text-base">
            Home
          </a>
          <a href="/" className="text-base">
            Events
          </a>
          <a href="/about" className="text-base">  {/* This is the link onClick for about page */}
            About
          </a>
          <a href="/contact" className="text-base">
            Contact
          </a>
        </nav>
        <div className="w-3/4 bg-white h-[1px] mt-3"></div>
        <div className="flex gap-4 mt-4">
          <IoLogoInstagram className="h-9 w-9" />
          <IoLogoFacebook className="h-8 w-8" />
          <IoLogoLinkedin className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
