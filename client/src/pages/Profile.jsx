import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import EventCard from '../components/Event/ProfileInput';
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [bookedEvents, setBookedEvents] = useState([
    {
      id: 1,
      name: 'Event 1',
      date: '2023-10-15',
      time: '12:00',
      location: 'Boston, MA',
    },
    {
      id: 2,
      name: 'Event 2',
      date: '2023-12-20',
      time: '12:00',
      location: 'Boston, MA',
    },
  ]);

  const { email } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      nuid: '001234567',
      location: 'Boston, MA',
    },
  );

  const fetchEvent = async () => {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:8000/event/getUser?_email=${email}`,
    );
    const data = await response.data;
    console.log(data);
    setUser(data);
    setBookedEvents(data);
    setLoading(false);
  };

  useEffect(() => {
    if (user) return;
    fetchEvent();
  }, [loading, user]);

  return (
    <DefaultLayout>
      <div className="bg-zinc-200 w-full grid grid-flow-row items-center justify-center mb-6 mt-6 shadow-md">
        <div className="bg-white p-10 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-2 text-center font-serif">{user.name}</h1>
          <p className="text-gray-500 mb-4"></p>

          {/* Profile Information */}
          <div className="mb-4 font-light">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-2 font-serif">Profile Information:</h2>
              <div className="line h-1 w-20 bg-blue-300"></div>
            </div>
            <ul className="text-xl list-disc pl-4 mt-4 font-sans">
              <li>
                <span>Email: {user.email}</span>
              </li>
              <li>
                <span>NUID: {user.nuid}</span> 
              </li>
              <li>
                <span>Location: {user.location}</span> 
              </li>
            </ul>
          </div>

          {/* Booked Events */}
          <div>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-2">Booked Events :</h2>
              <div className="line h-1 w-20 bg-blue-300"></div>
            </div>
            <br></br>
            <div>
              {bookedEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
