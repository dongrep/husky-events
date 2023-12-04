import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="h-full w-full bg-[#F2F2F2] flex flex-col justify-between">
      <NavBar />
      <div className="container min-h-[74vh] w-full relative mx-auto px-4">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
