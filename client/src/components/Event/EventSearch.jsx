import React from "react";
import SearchTextBox from "./SearchTextBox";
import { IoSearch } from "react-icons/io5";

const EventSearch = () => {
  return (
    <div className="h-24 w-full mx-6 bg-[#10107B] rounded-lg flex justify-evenly items-center gap-4">
      <div className="flex gap-4">
        <SearchTextBox text="Looking For" />
        <SearchTextBox text="Location" />
        <SearchTextBox text="When" />
      </div>
      <IoSearch className="h-14 w-14 rounded-md p-4 bg-primary text-white flex justify-center items-center" />
    </div>
  );
};

export default EventSearch;
