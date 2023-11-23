import React from "react";
import SearchTextBox from "./SearchTextBox";
import IconButton from "../Button/IconButton";

const EventSearch = () => {
  return (
    <div className="h-24 w-full mx-6 bg-[#10107B] rounded-lg flex justify-evenly items-center gap-4">
      <SearchTextBox text="Looking For" />
      <SearchTextBox text="Location" />
      <SearchTextBox text="When" />
      <IconButton text="S" />
    </div>
  );
};

export default EventSearch;
