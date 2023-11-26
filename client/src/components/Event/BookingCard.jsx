import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { useEventContext } from "../../context/useEventContext";
import { useNavigate } from "react-router-dom";

const BookingCard = () => {
  const navigate = useNavigate();
  const { currentEvent } = useEventContext();
  const scheduleTime = currentEvent.scheduleTime;
  // Create a Date object from the ISO 8601 string
  const dateObject = new Date(scheduleTime);

  // Define options for formatting
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour clock
  };

  // Format the date using toLocaleString with the custom options
  const formattedDate = dateObject.toLocaleString("en-US", options);

  const navigateToRegister = () => {
    navigate("/event/register");
  };

  return (
    <div className="rounded-md bg-white p-8 flex flex-col items-start">
      <div className="text-2xl text-black">Date & Time</div>
      <div className="text-lg mt-5 text-gray-500">{formattedDate}</div>
      <div className="text-lg my-5 text-primary">Add to calendar</div>
      <PrimaryButton buttonWidth={"w-full "}>
        <div
          onClick={() => navigateToRegister()}
          className="text-center cursor-pointer">
          Book Now
        </div>
      </PrimaryButton>
      <div className="w-full text-center text-base mt-5 text-gray-500">
        No Refunds
      </div>
    </div>
  );
};

export default BookingCard;
