import React from "react";

const NavBar = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container text-[#000] flex justify-between">
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
  );
};

export default NavBar;
