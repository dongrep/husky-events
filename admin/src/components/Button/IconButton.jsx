"use client";

import React from "react";

const IconButton = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="h-10 w-10 rounded-md bg-primary text-white flex justify-center items-center"
    >
      {text}
    </div>
  );
};

export default IconButton;
