import React from "react";

const Footer = () => {
  return (
    <div className="w-full bottom-0 right-0 sticky">
      <div className="flex text-[#000] justify-center">
        <div className="container flex justify-between">
          <div className="text-lg">Husky Events</div>
          <nav className="flex gap-4">
            <a href="#" className="text-lg">
              Home
            </a>
            <a href="#" className="text-lg">
              Events
            </a>
            <a href="#" className="text-lg">
              About
            </a>
            <a href="#" className="text-lg">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
