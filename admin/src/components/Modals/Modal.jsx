import React from "react";

const Modal = ({ title, message }) => {
  return (
    <div className="fixed bg-gray-500/30 inset-0 flex items-center justify-center">
      <div className="bg-white opacity-100 rounded-lg p-8 text-gray-700">
        <h2 className="text-2xl text-gray-700 font-bold mb-4">{title}</h2>
        {
          <p
            className={title === "Success" ? "text-green-600" : "text-red-600"}
          >
            {message}
          </p>
        }
      </div>
    </div>
  );
};

export default Modal;
