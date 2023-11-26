import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import PrimaryButton from "../Button/PrimaryButton";
import { useEventContext } from "../../context/useEventContext";

const EventInfoCard = () => {
  const { currentEvent } = useEventContext();
  return (
    <div className="w-96 h-full flex flex-col justify-center items-start">
      <PrimaryButton>
        <div className="flex items-center gap-2 text-sm">
          <IoIosArrowBack className="h-3 w-3 text-white" />
          <span className="text-white">Back</span>
        </div>
      </PrimaryButton>
      <div className="flex flex-col mt-4 justify-center items-start">
        <div className="text-5xl font-bold text-white">
          {currentEvent.name}
        </div>
        <div className="text-4xl mt-10 text-white">{currentEvent.location}</div>
        <div className="text-base mt-5 text-white">
          {currentEvent.description}
        </div>
        <div className="flex items-center gap-2 mt-5">
          <IoLocationOutline className="h-5 w-5 text-white" />
          <span className="text-white text-xl">{currentEvent.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventInfoCard;
