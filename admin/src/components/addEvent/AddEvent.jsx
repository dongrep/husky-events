import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./addEvent.css";

const AddEvent = () => {
  const INITIAL_STATE = {
    // id: 1,
    name: "",
    description: "",
    organizationID: "",
    startTime: "",
    endTime: "",
    startDate: "",
    endDate: "",
    location: "",
    // images: [],
    // links: [],
    // tags: [],
    // cost: 0,
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <div className="add-event-container">
          <h1 className="heading">Create Event</h1>
          <div className="formContainer">
            <div className="formGroup">
              <label htmlFor="">Event Name</label>
              <input type="text" placeholder="Enter you event name" id="name" />
            </div>
            <div className="formGroup">
              <label htmlFor="">Event Location</label>
              <input
                type="text"
                id="location"
                placeholder="Enter you event location"
              />
            </div>
            <div className="time">
              <div className="formGroup">
                <label htmlFor="">Start Time</label>
                <input
                  type="text"
                  id="startTime"
                  placeholder="Enter you event start time"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="">End Time</label>
                <input
                  type="text"
                  id="endTime"
                  placeholder="Enter you event end time"
                />
              </div>
            </div>
            <div className="date">
              <div className="formGroup">
                <label htmlFor="">Start Date</label>
                <input type="date" id="startDate" />
              </div>
              <div className="formGroup">
                <label htmlFor="">End Date</label>
                <input type="date" id="endDate" />
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="">Event Description</label>
              <textarea
                id="description"
                placeholder="Enter you event description"
                rows="6"
              />
            </div>
          </div>
          <div className="buttonContainer">
            <button className="createButton">Create</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddEvent;
