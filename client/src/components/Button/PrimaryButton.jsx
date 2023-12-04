import React from "react";

const PrimaryButton = ({ children, buttonWidth, onClickFunction }) => {
  return (
    <button
      onClick={onClickFunction}
      className={
        buttonWidth +
        " px-3 py-2 rounded-lg bg-primary text-white flex justify-center items-center"
      }>
      {children}
    </button>
  );
};

export default PrimaryButton;
