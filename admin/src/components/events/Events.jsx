import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import Sidebar from "../sidebar/Sidebar";
import "./events.css";

const Events = () => {
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
                <td>Organization Id</td>
                {/* <td>Start Time</td>
                <td>End Time</td> */}
                <td>Location</td>
                <td>Cost</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr>
                  <td>
                    <div className="event">
                      <img className="eventImage" />
                      {event?.name}
                    </div>
                  </td>
                  <td>{event?.organizationID}</td>
                  {/* <td>{event?.startTime}</td>
                  <td>{event?.endTime}</td> */}
                  <td>{event?.location}</td>
                  <td>{event?.cost || "Free"}</td>
                  <td>{handleEventStatus(event?.startDate, event?.endDate)}</td>
                  <td>
                    <div className="buttons">
                      <Link to={`/events/${event?._id}`}>
                        <button className={`button view`}>View</button>
                      </Link>
                      <button
                        className={`button delete`}
                        onClick={() => handleDelete(event?._id)}
                      >
                        Delete
                      </button>
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

// Reference Event
const events = [
  {
    id: 1,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 2,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 3,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 4,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 5,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 6,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 7,
    name: "Event 2",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 8,
    name: "Event 3",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 9,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 10,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 11,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 12,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 13,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 14,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 15,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
  {
    id: 16,
    name: "Event 1",
    description: "lorem 1231dw",
    organizationID: "john@gmail.com",
    startTime: "14.01.23",
    endTime: "14.01.23",
    location: "NEU",
    images: [],
    links: [],
    tags: [],
    cost: 0,
  },
];

export default Events;
