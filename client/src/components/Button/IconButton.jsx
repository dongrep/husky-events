"use client";

import React from "react";

const IconButton = ({ text, onClickFunction }) => {
  return (
    <div
      onClick={onClickFunction}
      className="h-10 w-10 rounded-md bg-primary text-white flex justify-center items-center">
      {text}
    </div>
  );
};

export default IconButton;
