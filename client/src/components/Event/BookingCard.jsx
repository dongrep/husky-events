import React, { useContext, useEffect, useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { formattedDate, formattedTime } from "../../utils/dateFormatters";
import Modal from "../Modals/Modal";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const BookingCard = ({ currentEvent, fetchEvent }) => {
  const navigate = useNavigate();
  const [userRegistered, setUserRegistered] = useState(false);
  const [bookNow, setBookNow] = useState(false);

  const { user, refreshUser } = useContext(AuthContext);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [event, setEvent] = useState(currentEvent);

  useEffect(() => {
    if (user) {
      const registered = user.registeredEvents.find(
        (event) => event === currentEvent._id,
      );
      if (registered) {
        setUserRegistered(true);
      }
    }
  }, [user, event, currentEvent]);

  useEffect(() => {
    setEvent(currentEvent);
  }, [currentEvent]);

  const bookEvent = async () => {
    if (!user) {
      navigate("/login");
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    try {
      const response = await axios.put("http://localhost:8000/event/register", {
        eventID: currentEvent._id,
        userID: user._id,
      });

      if (response.status === 201) {
        setSuccess(true);
        setShowMessage("Event booked successfully");
        setTimeout(() => {
          setSuccess(false);
          fetchEvent();
          refreshUser();
        }, 2000);
      } else if (response.status === 404) {
        setError(true);
        setShowMessage(response.data);
        setTimeout(() => {
          setError(false);
        }, 2000);
      } else if (response.status === 409) {
        setError(true);
        setShowMessage("Event already booked");
        setTimeout(() => {
          setError(false);
        }, 2000);
      } else {
        setError(true);
        setShowMessage("Error booking event");
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      setError(true);
      setShowMessage("Error booking event");
      setTimeout(() => {
        setError(false);
      }, 2000);
    }

    setBookNow(false);
  };

  return (
    <div className="relative rounded-lg bg-white p-8 min-w-[20vw] mx-auto flex flex-col items-start">
      {bookNow && (
        <Modal title="Book Now">
          <div className="text-lg text-black">
            Are you sure you want to book?
          </div>
          <div className="flex justify-end gap-5 mt-5">
            <PrimaryButton
              buttonWidth={"bg-gray-700"}
              onClick={() => setBookNow(false)}>
              Cancel
            </PrimaryButton>
            <PrimaryButton onClick={bookEvent} buttonWidth={"w-32"}>
              Confirm
            </PrimaryButton>
          </div>
        </Modal>
      )}
      {error && <Modal title="Error" message={showMessage} />}
      {success && <Modal title="Success" message={showMessage} />}
      <div className="text-2xl text-black">Date & Time</div>
      <div className="text-lg mt-5 text-gray-500">
        {formattedDate(event.startTime)}
      </div>
      <div className="text-body mt-2 text-gray-500">
        {formattedTime(event.startTime)} - {formattedTime(event.endTime)}
      </div>
      <div className="text-lg my-5 text-primary">Add to calendar</div>
      {!userRegistered ? (
        <PrimaryButton onClick={() => setBookNow(true)} buttonWidth={"w-full "}>
          Book Now
        </PrimaryButton>
      ) : (
        <div className="text-lg text-center bg-gray-200 my-5 p-3 rounded-lg flex w-full justify-center text-gray-500">
          Already booked
        </div>
      )}
      <div className="w-full text-center text-base mt-5 text-gray-500">
        No Refunds
      </div>
    </div>
  );
};

export default BookingCard;
