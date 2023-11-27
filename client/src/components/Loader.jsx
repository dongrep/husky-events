import React from "react";

const Loader = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};

export default Loader;
