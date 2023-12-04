import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import EventCard from '../components/Event/ProfileInput';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({});
  const [bookedEvents, setBookedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/user/getUser?_id=${id}');
        const data = await response.json();
        const { user, bookedEvents } = data;

        setProfileInfo(user);
        setBookedEvents(bookedEvents);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <div className="bg-zinc-200 w-screen grid grid-flow-row items-center justify-center mb-6 mt-6 shadow-md">
        <div className="bg-white p-10 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-2 text-center font-serif">{profileInfo.name}</h1>
          <p className="text-gray-500 mb-4">{profileInfo.role}</p>

          {/* Profile Information */}
          <div className="mb-4 font-light">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-2 font-serif">Profile Information:</h2>
              <div className="line h-1 w-20 bg-blue-300"></div>
            </div>
            <ul className="text-xl list-disc pl-4 mt-4 font-sans">
              <li>
                <span style={{ fontWeight: 'bold' }}>Email:</span> {profileInfo.email}
              </li>
              <li>
                <span style={{ fontWeight: 'bold' }}>NUID:</span> {profileInfo.NUID}
              </li>
              <li>
                <span style={{ fontWeight: 'bold' }}>Location:</span> {profileInfo.location}
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
