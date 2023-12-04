"use client";

import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full mt-4 items-center flex justify-center">
      <div className="container px-8 text-[#000] flex items-center justify-between">
        <div
          onClick={() => navigate("/")}
          className="text-xl md:text-3xl hover:cursor-pointer font-semibold">
          Husky<span className="text-primary">Events</span>
        </div>
        <nav className="flex items-center gap-4">
        <Link to="/login" className="text-lg flex items-center">
            Login
          </Link>
          <Link to="/signup">
            <PrimaryButton>Sign Up</PrimaryButton>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
