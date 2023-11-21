import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="h-screen px-2 bg-[#fff] flex flex-col justify-between">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
