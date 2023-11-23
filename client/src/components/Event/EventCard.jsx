import React from "react";

const EventCard = ({event}) => {
  return (
    <div className="border-1 border-gray-400 shadow-md w-[350px] rounded-md p-5">
      <div className="rounded-md relative">
        <div className="absolute overflow-clip rounded-md bg-secondaryYellowLight text-black top-3 left-3 p-2">
          {event.cost}
        </div>
        <img src={event.images[0]} className="rounded-md overflow-clip layout-fill object-contain w-full h-full " alt="event" />
        <div className="mt-4">
          <div className="text-base">
           {event.name}
          </div>
          <div className="text-xs text-primary mt-4">
            {event.scheduleTime}
          </div>
          <div className="text-xs mt-4">{event.location}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
