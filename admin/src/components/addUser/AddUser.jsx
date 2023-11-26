import React from "react";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./addUser.css";

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
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Last Name</label>
              <input type="text" id="lastName" placeholder="Enter last name" />
            </div>
            <div className="formGroup">
              <label htmlFor="">Email</label>
              <input type="text" id="email" placeholder="Enter email" />
            </div>
            <div className="formGroup">
              <label htmlFor="">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Phone Number</label>
              <input type="text" id="phone" placeholder="Enter Phone Number" />
            </div>
            <div className="formGroup">
              <label htmlFor="">Role</label>
              <select id="role">
                <option value="user">User</option>
                <option value="organization">Organization</option>
                <option value="admin">Admin</option>
              </select>
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

export default AddUser;
