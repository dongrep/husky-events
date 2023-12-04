import React, { useState } from "react";
import { useEventContext } from "../../context/useEventContext";

const EventRegistration = () => {
  const { currentEvent } = useEventContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tickets, setTickets] = useState(1);

  const register = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phone: phone,
      tickets: tickets,
      event: currentEvent.name,
    };
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center rounded-lg p-8 mx-4 my-12 shadow-2xl shadow-gray-700">
      <div className="text-2xl font-semibold my-4">
        Register : {currentEvent.name}
      </div>
      <form className="w-full flex-col">
        <div className="flex w-full flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your phone number"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="noOfTickets">Tickets</label>
            <input
              type="number"
              name="noOfTickets"
              value={tickets}
              min={1}
              max={10}
              id="noOfTickets"
              placeholder="Number of tickets"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={(e) => setTickets(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button
            onClick={(e) => register(e)}
            className="px-4 py-2 rounded-lg bg-primary text-white">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventRegistration;
