import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";
// import { cards } from "../../data";
import Transactions from "../transactions/Transactions";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./dashboard.css";

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchUserCount();
    fetchEventCount();
  }, []);

  useEffect(() => {
    setCards([
      {
        id: 1,
        title: "Total Users",
        number: userCount,
        change: 12,
      },
      {
        id: 2,
        title: "Total Events",
        number: eventCount,
        change: -2,
      },
      {
        id: 3,
        title: "Revenue",
        number: "$5000",
        change: 18,
      },
    ]);
  }, [userCount, eventCount]);

  const fetchUserCount = async () => {
    try {
      const res = await axios.get("http://localhost:8000/user/count");
      setUserCount(res?.data?.userCount);
    } catch (error) {
      console.log("Hello    fetchUserCount   error:", error);
    }
  };

  const fetchEventCount = async () => {
    try {
      const res = await axios.get("http://localhost:8000/event/count");
      setEventCount(res?.data?.eventCount);
    } catch (error) {
      console.log("Hello    fetchUserCount   error:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <div className="wrapper">
          <div className="main">
            <div className="cards">
              {cards.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </div>
            <Transactions />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
