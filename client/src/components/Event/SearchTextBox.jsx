import React from "react";

const SearchTextBox = ({text}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="search" className="text-xs text-gray-300">
        {text}
      </label>
      <input
        type="text"
        name="search"
        id="search"
        className="border-1 h-8 border-gray-400 rounded-md p-2"
      />
    </div>
  );
};

export default SearchTextBox;
