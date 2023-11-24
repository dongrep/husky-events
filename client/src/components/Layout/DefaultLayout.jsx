import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="h-full w-full bg-[#F2F2F2] flex flex-col justify-between">
      <NavBar />
      <div className="container h-full w-full relative px-4">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
