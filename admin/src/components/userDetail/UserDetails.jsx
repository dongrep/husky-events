import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./userDetails.css";

const user = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "john@gmail.com",
  password: "abc@123",
  phone: 123456,
  profileImage: "",
  role: "user",
};

const UserDetails = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <div className="update-user-container">
          <h1 className="heading">Update User</h1>
          <div className="formContainer">
            <div className="formGroup">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="Enter first name"
                value={user.firstName}
                id="firstName"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Enter last name"
                value={user.lastName}
                id="lastName"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Enter email"
                value={user.email}
                id="email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={user.password}
                id="password"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={user.phone}
                id="phone"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Role</label>
              <select value={user.role} id="role">
                <option value="user">User</option>
                <option value="organization">Organization</option>
                <option value="admin">Admin</option>
              </select>
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

export default UserDetails;
