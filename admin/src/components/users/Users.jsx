import { Link } from "react-router-dom";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import Sidebar from "../sidebar/Sidebar";
import "./users.css";

const Users = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <div className="user-container">
          <div className="top">
            <Search placeholder="Search user...." />
            <Link to="/users/add">
              <button className="addButton">Add New</button>
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>
                    <div className="user">
                      {/* <Image /> */}
                      {`${user.firstName} ${user.lastName}`}
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>
                    <div className="buttons">
                      <Link to={`/users/${user?._id}`}>
                        <button className="button view">View</button>
                      </Link>
                      <button className="button delete">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    password: "abc@123",
    phone: 123456,
    profileImage: "",
    role: "admin",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    password: "abc@123",
    phone: 123456,
    profileImage: "",
    role: "user",
  },
  {
    id: 3,
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    password: "abc@123",
    phone: 123456,
    profileImage: "",
    role: "user",
  },
  {
    id: 4,
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    password: "abc@123",
    phone: 123456,
    profileImage: "",
    role: "user",
  },
  {
    id: 5,
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    password: "abc@123",
    phone: 123456,
    profileImage: "",
    role: "user",
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    password: "abc@123",
    phone: 123456,
    profileImage: "",
    role: "user",
  },
  {
    id: 7,
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    password: "abc@123",
    phone: 123456,
    profileImage: "",
    role: "user",
  },
  {
    id: 8,
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    password: "abc@123",
    phone: 123456,
    profileImage: "",
    role: "user",
  },
];

export default Users;
