import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { formattedDate } from "../../utils/dateFormatters";

const BookingCard = ({ currentEvent }) => {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate(`/event/${currentEvent._id}/register`);
  };

  return (
    <div className="rounded-lg bg-white p-8 flex flex-col items-start">
      <div className="text-2xl text-black">Date & Time</div>
      <div className="text-lg mt-5 text-gray-500">
        {formattedDate(currentEvent.scheduleTime)}
      </div>
      <div className="text-lg my-5 text-primary">Add to calendar</div>
      <PrimaryButton
        onClick={() => navigateToRegister()}
        buttonWidth={"w-full "}
      >
        <div className="text-center">Book Now</div>
      </PrimaryButton>
      <div className="w-full text-center text-base mt-5 text-gray-500">
        No Refunds
      </div>
    </div>
  );
};

export default BookingCard;
