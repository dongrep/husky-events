import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import Sidebar from "../sidebar/Sidebar";
import "./users.css";
import Toast from "../toast/Toast";
import AlertModal from "../alertModal/AlertModal";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [paginatedUsers, setPaginatedUsers] = useState([]);
  const [input, setInput] = useState("");
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteModalId, setDeleteModalId] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedData, setPaginatedData] = useState("");
  const batchSize = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res =
        input && input.length >= 3
          ? await axios.get(`http://localhost:8000/user/getAll?q=${input}`)
          : await axios.get("http://localhost:8000/user/getAll");
      console.log("Hello    fetchData   res:", res);
      setUsers(res.data);
    } catch (error) {
      console.log("Hello    fetchData   error:", error);
      // setError(error);
    }
  };

  useEffect(() => {
    const startIndex = (pageNumber - 1) * batchSize;
    const endIndex = startIndex + batchSize;
    setPaginatedUsers(users.slice(startIndex, endIndex));
    setPaginatedData(
      `${startIndex + 1}-${Math.min(endIndex, users.length)} of ${users.length}`
    );
  }, [users, pageNumber]);

  const handleDelete = async (id) => {
    console.log("Hello    handleDelete   id:", id);
    try {
      const res = await axios.delete(`http://localhost:8000/user/delete/${id}`);

      // window.location.reload();
      // Refetch Data
      fetchData();
      setShowDeleteToast(true);
      if ((pageNumber - 1) * batchSize + batchSize > users.length) {
        setPageNumber(1);
      }

      console.log("Hello    handleDelete   res:", res);
    } catch (error) {
      console.log("Hello    handleDelete   error:", error);
    }
  };

  const handleDeleteModalClick = (id) => {
    setShowDeleteModal(true);
    setDeleteModalId(id);
  };

  useEffect(() => {
    if (input && input.length < 3) return;

    fetchData();
  }, [input]);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <div className="user-container">
          <div className="top">
            <Search placeholder="Search user...." setInput={setInput} />
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
              {paginatedUsers.map((user) => (
                <tr>
                  <td>
                    <div className="user">
                      {/* <Image /> */}
                      {`${user.firstName} ${user.lastName}`}
                    </div>
                  </td>
                  <td>{user?.email}</td>
                  <td>{user?.phone}</td>
                  <td>{user?.role}</td>
                  <td>
                    <div className="buttons">
                      <Link to={`/users/${user?._id}`}>
                        <button className="button view">View</button>
                      </Link>
                      <button
                        className="button delete"
                        onClick={() => handleDeleteModalClick(user?._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              className={`addButton ${pageNumber === 1 && "disabled"}`}
              disabled={pageNumber === 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              Prev
            </button>
            <p>{paginatedData}</p>
            <button
              className={`addButton ${
                pageNumber === Math.ceil(users.length / 10) && "disabled"
              }`}
              disabled={pageNumber === Math.ceil(users.length / 10)}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next
            </button>
          </div>
          <Toast
            message={"User has been deleted"}
            show={showDeleteToast}
            onClose={() => {
              setShowDeleteToast(false);
            }}
          />

          <AlertModal
            message={"Are you sure you want to delete the given user?"}
            isOpen={showDeleteModal}
            onConfirm={() => {
              handleDelete(deleteModalId);
              setShowDeleteModal(false);
              setDeleteModalId(null);
            }}
            onClose={() => {
              setShowDeleteModal(false);
              setDeleteModalId(null);
            }}
          />
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
