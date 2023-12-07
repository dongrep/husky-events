"use client";

import React, { useContext } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { IoPersonCircleSharp } from "react-icons/io5";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const getGretting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning,";
    } else if (hour < 18) {
      return "Good Afternoon,";
    } else {
      return "Good Evening,";
    }
  };

  return (
    <div className="w-full mt-4 items-center flex justify-center">
      <div className="container px-8 text-[#000] flex items-center justify-between">
        <div
          onClick={() => navigate("/")}
          className="text-xl md:text-3xl hover:cursor-pointer font-semibold"
        >
          Husky<span className="text-primary">Events</span>
        </div>
        <nav className="flex items-center gap-4">
          {!user ? (
            <>
              <Link to="/login" className="text-lg flex items-center">
                Login
              </Link>
              <Link to="/signup">
                <PrimaryButton>Sign Up</PrimaryButton>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="flex line-clamp-2 items-center gap-2"
              >
                <IoPersonCircleSharp className="h-12 w-12 text-primary hidden md:block" />
                <div className="flex flex-col text-xs lg:text-base">
                  {getGretting()}
                  <span className="font-bold text-primary">{` ${user.firstName}`}</span>
                </div>
              </Link>
              <PrimaryButton
                onClick={() => {
                  localStorage.removeItem("token");
                  dispatch({ type: "LOGOUT" });
                }}
              >
                Logout
              </PrimaryButton>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
