import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const [info, setInfo] = useState(INITIAL_STATE);
  console.log("Hello    AddUser   info:", info);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = async () => {
    try {
      const data = { ...info, organizationID: "101" };
      const res = await axios.post("http://localhost:8800/event/create", data);
      console.log("Hello    onSubmit   res:", res);
      navigate("/events");
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
          <h1 className="heading">Create Event</h1>
          <div className="formContainer">
            <div className="formGroup">
              <label htmlFor="">Event Name</label>
              <input
                type="text"
                placeholder="Enter you event name"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Event Location</label>
              <input
                type="text"
                id="location"
                placeholder="Enter you event location"
                onChange={handleChange}
              />
            </div>
            <div className="time">
              <div className="formGroup">
                <label htmlFor="">Start Time</label>
                <input
                  type="text"
                  id="startTime"
                  placeholder="Enter you event start time"
                  onChange={handleChange}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="">End Time</label>
                <input
                  type="text"
                  id="endTime"
                  placeholder="Enter you event end time"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="date">
              <div className="formGroup">
                <label htmlFor="">Start Date</label>
                <input type="date" id="startDate" onChange={handleChange} />
              </div>
              <div className="formGroup">
                <label htmlFor="">End Date</label>
                <input type="date" id="endDate" onChange={handleChange} />
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="">Event Description</label>
              <textarea
                id="description"
                placeholder="Enter you event description"
                rows="6"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="buttonContainer">
            <button className="createButton" onClick={onSubmit}>
              Create
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddEvent;
