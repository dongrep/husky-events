import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import PrimaryButton from "../Button/PrimaryButton";

const EventInfoCard = () => {
  return (
    <div className="w-96 h-full flex flex-col justify-center items-start">
      <PrimaryButton>
        <div className="flex items-center gap-2 text-sm">
          <IoIosArrowBack className="h-3 w-3 text-white" />
          <span className="text-white">Back</span>
        </div>
      </PrimaryButton>
      <div className="flex flex-col justify-center items-start">
        <div className="text-[64px] font-bold text-white">Event Name</div>
        <div className="text-4xl mt-10 text-white">Event Location</div>
        <div className="text-base mt-5 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in
          soluta iusto? Facere nemo est provident et cupiditate eaque
          consequuntur, doloribus dolores eveniet tempora nostrum eius nihil
          voluptate ipsum autem!
        </div>
        <div className="flex items-center gap-2 mt-5">
          <IoLocationOutline className="h-5 w-5 text-white" />
          <span className="text-white text-xl">Location</span>
        </div>
      </div>
    </div>
  );
};

export default EventInfoCard;
