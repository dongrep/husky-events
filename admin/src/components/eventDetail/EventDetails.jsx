import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./eventDetails.css";

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
      const res = await axios.put(
        `http://localhost:8000/event/edit/${eventId}`,
        event
      );
      console.log("Hello    onSubmit   res:", res);
    } catch (error) {
      console.log("Hello    onSubmit   error:", error);
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
              <label htmlFor="">Event Name</label>
              <input
                type="text"
                placeholder="Enter you event name"
                value={event?.name}
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Event Location</label>
              <input
                type="text"
                placeholder="Enter you event location"
                value={event?.location}
                id="location"
                onChange={handleChange}
              />
            </div>
            <div className="time">
              <div className="formGroup">
                <label htmlFor="">Start Time</label>
                <input
                  type="text"
                  placeholder="Enter you event start time"
                  value={event?.startTime}
                  id="startTime"
                  onChange={handleChange}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="">End Time</label>
                <input
                  type="text"
                  placeholder="Enter you event end time"
                  value={event?.endTime}
                  id="endTime"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="date">
              <div className="formGroup">
                <label htmlFor="">Start Date</label>
                <input
                  type="date"
                  value={event?.startDate}
                  id="startDate"
                  onChange={handleChange}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="">End Date</label>
                <input
                  type="date"
                  value={event?.endDate}
                  id="endDate"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="">Event Description</label>
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EventDetails;
