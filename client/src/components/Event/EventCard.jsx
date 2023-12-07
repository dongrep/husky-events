import React from "react";
import { useNavigate } from "react-router-dom";
import { useEventContext } from "../../context/useEventContext";
import { formattedDate, formattedTime } from "../../utils/dateFormatters";
import { IoLocationOutline } from "react-icons/io5";

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const { updateEvent } = useEventContext();

  const navigateToEventDetails = () => {
    updateEvent(event);
    navigate(`/event/${event._id}`);
  };

  return (
    <div
      onClick={() => navigateToEventDetails()}
      className="cursor-pointer shadow-lg shadow-gray-300 w-[270px] lg:w-[350px] bg-white rounded-lg p-5"
    >
      <div className="rounded-lg relative">
        {/* <div className="absolute overflow-clip rounded-lg bg-secondaryYellowLight text-black top-3 left-3 p-2">
          Free
        </div> */}
        <div className="w-full h-[180px] md:h-[210px] overflow-hidden">
          <img
            src={event.image}
            className="rounded-lg overflow-clip layout-fill object-cover w-full h-full "
            alt="event"
          />
        </div>
        <div className="mt-4">
          <div className="text-base h-6 overflow-clip">{event.name}</div>
          <div className="text-sm font-semibold text-primary mt-4">
            {formattedDate(event.startTime)}
          </div>
          <div className="text-xs text-primary mt-1">
            {formattedTime(event.startTime)} - {formattedTime(event.endTime)}
          </div>
          <div className="text-xs mt-4 h-3 md:h-6 flex items-center gap-1">
            <IoLocationOutline className="h-4 w-4" />
            {event.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
