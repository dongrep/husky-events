import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./userDetails.css";
import Toast from "../toast/Toast";
import { performAllValidation } from "../../services/helper";

const UserDetails = () => {
  // const user = {
  //   id: 1,
  //   firstName: "John",
  //   lastName: "Doe",
  //   email: "john@gmail.com",
  //   password: "abc@123",
  //   phone: 123456,
  //   profileImage: "",
  //   role: "user",
  // };

  const [user, setUser] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState(false);
  const userId = useLocation().pathname.split("/").pop();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/user/get/${userId}`);
        console.log("Hello    fetchData   res:", res);
        setUser(res.data);
      } catch (error) {
        console.log("Hello    fetchData   error:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async () => {
    try {
      performAllValidation(user);
      const res = await axios.put(
        `http://localhost:8000/user/edit/${userId}`,
        user
      );
      setShowToast(true);
      setMessage("User updated successfully");
      console.log("Hello    onSubmit   res:", res);
    } catch (error) {
      console.log("Hello    onSubmit   error:", error);
      setShowToast(true);
      setMessage(
        error?.response?.data?.errorMssg ||
          error?.message ||
          "Something went wrong"
      );
    }
  };

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
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Enter last name"
                value={user.lastName}
                id="lastName"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Enter email"
                value={user.email}
                id="email"
                disabled={true}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={user.password}
                id="password"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={user.phone}
                id="phone"
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Role</label>
              <select value={user.role} id="role" onChange={handleChange}>
                <option value="user">User</option>
                <option value="organizer">Organizer</option>
                <option value="admin">Admin</option>
              </select>
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

export default UserDetails;
