import React from "react";

const PrimaryButton = ({ children, buttonWidth, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        buttonWidth +
        " px-3 py-2 rounded-md bg-primary text-white flex justify-center items-center"
      }
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
