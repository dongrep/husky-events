import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Toast from "../toast/Toast";

import "./eventDetails.css";
import { performEventsValidation } from "../../services/helper";

const EventDetails = () => {
  // Ref event
  // const event = {
  //   id: 1,
  //   name: "Event 1",
  //   description: "lorem 1231dw",
  //   organizationID: "john@gmail.com",
  //   startTime: "14.01.23",
  //   endTime: "14.01.23",
  //   location: "NEU",
  //   startDate: "2023-11-23",
  //   endDate: "2023-11-23",
  //   images: [],
  //   links: [],
  //   tags: [],
  //   cost: 0,
  // };

  const [event, setEvent] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  const eventId = useLocation().pathname.split("/").pop();
  console.log("Hello    EventDetails   eventId:", eventId);

  const handleChange = (e) => {
    setEvent((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/event/getevent?_id=${eventId}`
        );
        console.log("Hello    fetchData   res:", res);
        setEvent(res.data);
      } catch (error) {
        console.log("Hello    fetchData   error:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async () => {
    try {
      performEventsValidation(event);
      const res = await axios.put(
        `http://localhost:8000/event/edit/${eventId}`,
        event
      );
      setShowToast(true);
      setMessage("Event updated successfully");
    } catch (error) {
      console.error("Hello    onSubmit   error:", error);
      setShowToast(true);
      setMessage(error?.message);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <div className="add-event-container">
          <h1 className="heading">View Event</h1>
          <div className="formContainer">
            <div className="formGroup">
              <label htmlFor="name">Event Name</label>
              <input
                type="text"
                placeholder="Enter event name"
                value={event?.name}
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="organizer">Organizer</label>
              <input
                type="text"
                placeholder="Enter organizer details"
                value={event?.organizer}
                id="organizer"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="location">Event Location</label>
              <input
                type="text"
                placeholder="Enter you event location"
                value={event?.location}
                id="location"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="locationUrl">Event Location URL</label>
              <input
                type="text"
                placeholder="Enter you event location URL"
                value={event?.locationUrl}
                id="locationUrl"
                onChange={handleChange}
              />
            </div>
            <div className="time">
              <div className="formGroup">
                <label htmlFor="startTime">Start Time</label>
                <input
                  type="datetime-local"
                  name="startTime"
                  placeholder="Enter you event start time"
                  value={event?.startTime}
                  id="startTime"
                  onChange={handleChange}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="endTime">End Time</label>
                <input
                  type="datetime-local"
                  name="endTime"
                  placeholder="Enter you event end time"
                  value={event?.endTime}
                  id="endTime"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="description">Event Description</label>
              <textarea
                placeholder="Enter you event description"
                rows="6"
                value={event?.description}
                id="description"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="buttonContainer">
            <button className="createButton" onClick={onSubmit}>
              Update
            </button>
          </div>
          <Toast
            message={message}
            show={showToast}
            onClose={() => {
              setShowToast(false);
            }}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EventDetails;
