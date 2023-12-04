import React from "react";

const EventFilter = ({ selectedFilter, updateFilter }) => {
  const allowedTags = [
    "music",
    "sports",
    "food",
    "travel",
    "art",
    "dance",
    "comedy",
    "fashion",
  ];
  return (
    <div className="h-24 p-8 w-full lg:w-1/2 lg:mx-4 my-2 bg-[#10107B] rounded-lg flex justify-evenly items-center gap-4">
      <div className="flex w-full flex-col gap-2">
        <label htmlFor="search" className="text-xs text-gray-300">
          Looking For
        </label>

        <select
          name="search"
          id="search"
          value={selectedFilter}
          onChange={(e) => updateFilter(e.target.value)}
          className="border w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
          <option value="all">All</option>
          {allowedTags.map((tag, index) => (
            <option id={index} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default EventFilter;
