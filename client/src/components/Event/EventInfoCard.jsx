import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import PrimaryButton from "../Button/PrimaryButton";
import { Link } from "react-router-dom";

const EventInfoCard = ({ currentEvent }) => {
  return (
    <div className="mx-7 h-full flex flex-col justify-center items-start">
      <Link to="/">
        <PrimaryButton>
          <div className="flex items-center gap-2 text-sm">
            <IoIosArrowBack className="h-3 w-3 text-white" />
            <span className="text-white">Back</span>
          </div>
        </PrimaryButton>
      </Link>
      <div className="flex flex-col mt-4 justify-center items-start">
        <div className="lg:text-5xl text-2xl font-bold lg:text-left text-justify text-white">
          {currentEvent.name}
        </div>
        <div className="lg:text-base text-xs mt-5 text-white">
          {currentEvent.description}
        </div>
        <Link
          target={currentEvent.locationUrl ? "_blank" : null}
          to={currentEvent.locationUrl ?? null}
          className={"flex items-center gap-2 mt-5"}>
          <IoLocationOutline className="lg:h-5 lg:w-5 h-3 w-3 text-white" />
          <span
            className={
              (currentEvent.locationUrl && "underline") +
              " text-white lg:text-xl text-sm"
            }>
            {currentEvent.location}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default EventInfoCard;
