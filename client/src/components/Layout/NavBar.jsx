"use client";

import React from "react";
import Button from "../Button/PrimaryButton";

const NavBar = () => {
  return (
    <div className="w-full mt-4 items-center flex justify-center">
      <div className="container px-8 text-[#000] flex justify-between">
        <div className="text-lg font-semibold">
          Husky<span className="text-primary">Events</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#" className="text-lg flex items-center">
            Login
          </a>
          <Button
            text="Sign Up"
            onClickFunction={() => console.log("Sign Up")}
          />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
