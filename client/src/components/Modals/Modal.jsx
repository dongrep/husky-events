import React from "react";

const Modal = ({ title, message, children }) => {
  return (
    <div className="fixed bg-gray-500/30 inset-0 flex items-center justify-center">
      <div className="bg-white opacity-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children || <p>{message}</p>}
      </div>
    </div>
  );
};

export default Modal;
