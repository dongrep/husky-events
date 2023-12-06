import React from "react";
import BookingCard from "./BookingCard";
import EventInfoCard from "./EventInfoCard";

const EventDetailsComponent = ({ currentEvent, fetchEvent }) => {
  return (
    <div className="relative w-full h-full shadow-lg shadow-gray-400">
      <div className="w-full mt-4 relative h-[255px] lg:h-[595px] rounded-t-md overflow-hidden">
        <img
          src={currentEvent.image}
          className="layout-fill object-cover w-full h-full"
          alt="event"
        />
      </div>
      <div className="relative bg-gray-600 p-5 mb-10 rounded-b-md h-full w-full top-0 lg:flex-row flex flex-col gap-y-5 lg:gap-0">
        <div className="flex lg:flex-1 justify-center items-center">
          <EventInfoCard currentEvent={currentEvent} />
        </div>
        <div className="flex lg:flex-1 justify-center items-center">
          <div className="flex h-1/2 flex-col justify-center items-start">
            <BookingCard currentEvent={currentEvent} fetchEvent={fetchEvent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsComponent;
