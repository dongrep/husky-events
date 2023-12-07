import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./addUser.css";
import Toast from "../toast/Toast";

const AddUser = () => {
  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    profileImage: "",
    role: "user",
  };
  const navigate = useNavigate();

  const [info, setInfo] = useState(INITIAL_STATE);
  const [showCreateToast, setShowCreateToast] = useState(false);

  console.log("Hello    AddUser   info:", info);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8000/user/create", info);
      console.log("Hello    onSubmit   res:", res);

      setShowCreateToast(true);

      setTimeout(() => {
        navigate("/users");
      }, 2000);
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
        <div className="new-user-container">
          <h1 className="heading">Create User</h1>
          <div className="formContainer">
            <div className="formGroup">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter first name"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter last name"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                id="phone"
                placeholder="Enter Phone Number"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Role</label>
              <select id="role" onChange={handleChange}>
                <option value="user">User</option>
                <option value="organizer">Organizer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          <div className="buttonContainer">
            <button className="createButton" onClick={onSubmit}>
              Create
            </button>
          </div>
          <Toast
            message={"User has been created"}
            show={showCreateToast}
            onClose={() => {
              setShowCreateToast(false);
            }}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddUser;
