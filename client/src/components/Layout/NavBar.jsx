"use client";

import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full mt-4 items-center flex justify-center">
      <div className="container px-8 text-[#000] flex justify-between">
        <div
          onClick={() => navigate("/")}
          className="text-lg hover:cursor-pointer font-semibold">
          Husky<span className="text-primary">Events</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="/" className="text-lg flex items-center">
            Login
          </a>
          <PrimaryButton>Sign Up</PrimaryButton>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
