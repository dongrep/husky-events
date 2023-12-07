import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { AuthContext } from "../context/authContext";
import { IoPencilOutline, IoPersonCircleSharp } from "react-icons/io5";
import EventCard from "../components/Event/EventCard";
import axios from "axios";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");

  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [createdEvents, setCreatedEvents] = useState([]);

  const [loadingEvents, setLoadingEvents] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.registeredEvents.length === 0) return;
      setLoadingEvents(true);
      const fetchEvents = async () => {
        // fetch from multiple endpoints

        const response = await axios.get(
          `http://localhost:8000/event/getregisteredevents?userID=${user._id}`
        );
        const createdEventsResponse = await axios.get(
          `http://localhost:8000/event/getcreatedevents?userID=${user._id}`
        );

        const data = await response.data;
        const filteredData = data.filter((event) => event !== null);
        const createdEventsData = await createdEventsResponse.data;
        const filteredCreatedEventsData = createdEventsData.filter(
          (event) => event !== null
        );

        setRegisteredEvents(filteredData);
        setCreatedEvents(filteredCreatedEventsData);
        setLoadingEvents(false);
      };
      fetchEvents();
    } else{
      navigate("/");
    }
  }, [user]);

  const defaultImageUrl = "./Neutral.jpg";

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleImageUrlChange = (e) => {
    setNewImageUrl(e.target.value);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  return (
    <DefaultLayout>
      <div className="w-full items-center justify-center mb-6 mt-6 shadow-md rounded-lg shadow-gray-700">
        <div className="bg-white p-10 rounded-md shadow-md">
          <div className="flex items-center justify-center mb-4">
            {editMode ? (
              <input
                type="text"
                value={newImageUrl}
                onChange={handleImageUrlChange}
                className="rounded-full h-10 border-2 border-black mr-2 px-2 mt-14"
              />
            ) : newImageUrl ? (
              <img
                src={newImageUrl || defaultImageUrl}
                alt="Profile"
                className="rounded-full border-2 h-24 mr-2"
              />
            ) : (
              <IoPersonCircleSharp className="rounded-full border-2 h-24 w-24 text-primary mr-2" />
            )}
            <label
              htmlFor="profileImage"
              className="cursor-pointer bg-blue-500 text-white rounded-full p-1.5 mt-14"
              onClick={handleEditClick}
            >
              <IoPencilOutline />
            </label>
            {editMode && (
              <button
                className="ml-2 bg-green-500 text-white rounded-full p-2 mt-14"
                onClick={handleSaveClick}
              >
                Save
              </button>
            )}
          </div>
          <h1 className="text-3xl font-bold mb-2 text-center">
            <p className="text-3xl">
              Hello! {`${user?.firstName} ${user?.lastName}`}
            </p>
          </h1>
          <p className="text-gray-500 mb-4"></p>

          {/* Profile Information */}
          <div className="mb-4 font-light">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold mb-2">
                Profile Information:
              </h2>
              <div className="line h-1 w-20 bg-blue-300"></div>
            </div>
            <ul className="text-xl list-disc pl-4 mt-4 font-sans">
              <li>
                <span>Email: {user?.email}</span>
              </li>
              <li>
                <span>Phone: {user?.phone}</span>
              </li>
            </ul>
          </div>

          {/* Booked Events */}
          <div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold mb-2">Booked Events :</h2>
              <div className="line h-1 w-20 bg-blue-300"></div>
            </div>
            <div className="flex w-full overflow-x-scroll py-4 gap-4 ">
              {!loadingEvents && registeredEvents.length === 0 && (
                <p>You haven't booked any events.</p>
              )}
              {loadingEvents ? (
                <div>Loading...</div>
              ) : (
                registeredEvents.map((event) => (
                  <div className="w-full lg:w-1/4">
                    <EventCard key={event.id} event={event} />
                  </div>
                ))
              )}
            </div>
          </div>
          {/* Created Events */}
          <div>
            <div className="flex mt-10 flex-col">
              <h2 className="text-2xl font-semibold mb-2">Created Events :</h2>
              <div className="line h-1 w-20 bg-blue-300"></div>
            </div>
            <div className="flex w-full overflow-x-scroll py-4 gap-4 ">
              {!loadingEvents && createdEvents?.length === 0 && (
                <p>You haven't created any events.</p>
              )}
              {loadingEvents ? (
                <div>Loading...</div>
              ) : (
                createdEvents.map((event) => (
                  <div className="w-1/4">
                    <EventCard key={event.id} event={event} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
