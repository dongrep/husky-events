import React from "react";

const PrimaryButton = ({ children, buttonWidth, onClick, props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={
        buttonWidth +
        " px-1 py-2 rounded-md  bg-white text-black flex justify-center items-center hover:bg-gray-300 font-bold border-2"
      }
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
