import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import Sidebar from "../sidebar/Sidebar";
import Toast from "../toast/Toast";
import AlertModal from "../alertModal/AlertModal";
import "./events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [paginatedEvents, setPaginatedEvents] = useState([]);
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
      const res = pageNumber
        ? await axios.get(
            `http://localhost:8000/event/events?page=${pageNumber}`
          )
        : await axios.get(`http://localhost:8000/event/events`);

      console.log("Hello    fetchData   res:", res);
      setEvents(res.data);
    } catch (error) {
      console.log("Hello    fetchData   error:", error);
      // setError(error);
    }
  };

  useEffect(() => {
    const startIndex = (pageNumber - 1) * batchSize;
    const endIndex = startIndex + batchSize;
    setPaginatedEvents(events.slice(startIndex, endIndex));
    setPaginatedData(
      `${startIndex + 1}-${Math.min(endIndex, events.length)} of ${
        events.length
      }`
    );
  }, [events, pageNumber]);

  const handleDelete = async (id) => {
    console.log("Hello    handleDelete   id:", id);
    try {
      const res = await axios.delete(
        `http://localhost:8000/event/delete?_id=${id}`
      );

      // Refetch Data
      fetchData();
      setShowDeleteToast(true);
      if ((pageNumber - 1) * batchSize + batchSize > events.length) {
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
    const filterEvents = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/event/events?q=${input}`
        );
        console.log("Hello    fetchData   res:", res);
        setEvents(res.data);
      } catch (error) {
        console.log("Hello    fetchData   error:", error);
        // setError(error);
      }
    };

    filterEvents();
  }, [input]);

  const handleEventStatus = (startDateInput, endDateInput) => {
    const sDate = new Date(startDateInput);
    const eDate = new Date(endDateInput);
    const date = new Date();

    if (date < sDate) {
      return "Upcoming";
    } else if (date >= sDate && date <= eDate) {
      return "InProgress";
    } else {
      return "Completed";
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <div className="event-container">
          <div className="top">
            <Search placeholder="Search events...." setInput={setInput} />
            <Link to="/events/add">
              <button className="addButton">Add New</button>
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Organizer</td>
                <td>Location</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {paginatedEvents.map((event) => (
                <tr>
                  <td>
                    <div className="event">
                      <img className="eventImage" />
                      {event?.name}
                    </div>
                  </td>
                  <td>{event?.organizer || "NEU"}</td>
                  <td>{event?.location}</td>
                  <td>{handleEventStatus(event?.startTime, event?.endTime)}</td>
                  <td>
                    <div className="buttons">
                      <Link to={`/events/${event?._id}`}>
                        <button className={`button view`}>View</button>
                      </Link>
                      <button
                        className={`button delete`}
                        onClick={() => handleDeleteModalClick(event?._id)}
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
                pageNumber === Math.ceil(events.length / 10) && "disabled"
              }`}
              disabled={pageNumber === Math.ceil(events.length / 10)}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next
            </button>
          </div>
        </div>
        <Toast
          message={"Event has been deleted"}
          show={showDeleteToast}
          onClose={() => {
            setShowDeleteToast(false);
          }}
        />

        <AlertModal
          message={"Are you sure you want to delete the given Event?"}
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
        <Footer />
      </div>
    </div>
  );
};

// Reference Event
// const events = [
//   {
//     id: 1,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 2,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 3,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 4,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 5,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 6,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 7,
//     name: "Event 2",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 8,
//     name: "Event 3",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 9,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 10,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 11,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 12,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 13,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 14,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 15,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
//   {
//     id: 16,
//     name: "Event 1",
//     description: "lorem 1231dw",
//     organizationID: "john@gmail.com",
//     startTime: "14.01.23",
//     endTime: "14.01.23",
//     location: "NEU",
//     images: [],
//     links: [],
//     tags: [],
//     cost: 0,
//   },
// ];

export default Events;
