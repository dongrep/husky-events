"use client";

import React, { useContext } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

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
              <p className="text-gray-600 text-lg">
                Welcome, <Link to="/profile" className="text-primary font-semibold hover:underline">{user.firstName}</Link>
              </p>
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
