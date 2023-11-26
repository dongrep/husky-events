import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./eventDetails.css";

const EventDetails = () => {
  // Ref event
  const event = {
    id: 1,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    startDate: "2023-11-23",
    endDate: "2023-11-23",
    images: [],
    links: [],
    tags: [],
    cost: 0,
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
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Event Location</label>
              <input
                type="text"
                placeholder="Enter you event location"
                value={event?.location}
                id="location"
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
                />
              </div>
              <div className="formGroup">
                <label htmlFor="">End Time</label>
                <input
                  type="text"
                  placeholder="Enter you event end time"
                  value={event?.endTime}
                  id="endTime"
                />
              </div>
            </div>
            <div className="date">
              <div className="formGroup">
                <label htmlFor="">Start Date</label>
                <input type="date" value={event?.startDate} id="startDate" />
              </div>
              <div className="formGroup">
                <label htmlFor="">End Date</label>
                <input type="date" value={event?.endDate} id="endDate" />
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="">Event Description</label>
              <textarea
                placeholder="Enter you event description"
                rows="6"
                value={event?.description}
                id="description"
              />
            </div>
          </div>
          <div className="buttonContainer">
            <button className="createButton">Update</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EventDetails;
