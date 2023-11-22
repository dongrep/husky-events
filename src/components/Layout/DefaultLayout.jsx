import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Signup from "./Signup";
const DefaultLayout = ({ children }) => {
  return (
    <div className="h-screen px-2 bg-[#fff] flex flex-col justify-between">
      <NavBar />
      <Signup />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
