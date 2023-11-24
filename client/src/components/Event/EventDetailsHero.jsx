import React from "react";
import BookingCard from "./BookingCard";
import EventInfoCard from "./EventInfoCard";

const EventDetailsHero = () => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full mt-4 relative h-36 lg:h-[595px] bg-yellow-600 rounded-t-md overflow-hidden">
        <img
          src={"/hero.jpeg"}
          className="layout-fill object-cover w-full h-full"
          alt="event"
        />
      </div>
      <div className="relative bg-gray-600 p-5 mb-10 rounded-b-md h-full w-full top-0 flex">
        <div className="flex flex-1 justify-center items-center">
          <EventInfoCard />
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div className="flex h-1/2 flex-col justify-center items-start">
            <BookingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsHero;
