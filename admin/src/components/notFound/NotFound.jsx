import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const NotFound = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Navbar />
          <div className="flex flex-col items-center justify-center h-[80vh] w-full">
            <h1 className="text-4xl text-primary font-bold text-center">404</h1>
            <h2 className="text-2xl font-bold text-center">Page Not Found</h2>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default NotFound;
