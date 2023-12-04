import React, { useState, useEffect } from "react";

const Toast = ({ message, show, onClose }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);

    // Automatically close the toast after a certain time (e.g., 3000 milliseconds)
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000);

    // Clear the timeout when the component unmounts or the toast is closed
    return () => clearTimeout(timeoutId);
  }, [show, onClose]);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 p-4 bg-gray-800 text-white rounded shadow-lg">
          {message}
          <button
            className="ml-4 p-2 text-white rounded focus:outline-none"
            onClick={() => {
              setIsVisible(false);
              onClose();
            }}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Toast;
