'use client';

import React from "react";

const Button = ({ text, onClickFunction }) => {
  return (
    <div
      onClick={onClickFunction}
      className="px-3 py-2 rounded-md bg-primary text-white flex justify-center items-center">
      {text}
    </div>
  );
};

export default Button;
