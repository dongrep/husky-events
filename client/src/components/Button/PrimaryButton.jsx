"use client";

import React from "react";

const PrimaryButton = ({ children, buttonWidth, onClickFunction }) => {
  return (
    <div
      onClick={onClickFunction}
      className={
        buttonWidth +
        " px-3 py-2 rounded-md bg-primary text-white flex justify-center items-center"
      }>
      {children}
    </div>
  );
};

export default PrimaryButton;
