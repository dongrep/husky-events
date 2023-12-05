import React from "react";

const PrimaryButton = ({ children, buttonWidth, onClick, props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={
        buttonWidth +
        " px-3 py-2 rounded-lg bg-primary text-white flex justify-center items-center"
      }>
      {children}
    </button>
  );
};

export default PrimaryButton;
