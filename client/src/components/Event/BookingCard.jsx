import React from "react";
import PrimaryButton from "../Button/PrimaryButton";

const BookingCard = () => {
  return (
    <div className="rounded-md bg-white p-8 flex flex-col items-start">
      <div className="text-2xl text-black">Date & Time</div>
      <div className="text-lg mt-5 text-gray-500">
        Saturdat, March 18 2023, 9.30PM
      </div>
      <div className="text-lg my-5 text-primary">Add to calendar</div>
      <PrimaryButton buttonWidth={"w-full"}>
        <div className="text-center">Book Now</div>
      </PrimaryButton>
      <div className="w-full text-center text-base mt-5 text-gray-500">
        No Refunds
      </div>
    </div>
  );
};

export default BookingCard;
