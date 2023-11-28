import React from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import EventCard from '../components/Event/ProfileInput';

const Profile = () => {
  const profileInfo = {
    name: 'Preyash Mehta',
    gender: 'Female', 
    NUID : '001054338',
    email: 'mehta.prey@northeastern.edu',
    location: 'Boston, United States',
    github: 'github.com/preyashmehta',
  };

  const bookedEvents = [
    { id: 1, name: 'Event-1', date: '2023-09-19' },
    { id: 2, name: 'Event-2', date: '2023-10-27' },
    // Add more events as needed
  ];

  const profileImages = {
    Male: './Male.jpg', 
    Female: './Female.jpg', 
  };

  const profileImage = profileImages[profileInfo.gender];

  return (
    <DefaultLayout>
      <div className="bg-zinc-200 w-screen grid grid-flow-row items-center justify-center mb-6 mt-6 shadow-md">
        <div className="bg-white p-10 rounded-md shadow-md">
          <img
            src={profileImage} 
            alt="Profile"
            className="rounded-full mx-auto mb-4 h-44"
          />
          <h1 className="text-3xl font-bold mb-2 text-center font-serif">{profileInfo.name}</h1>
          <p className="text-gray-500 mb-4">{profileInfo.role}</p>

          <div className="mb-4 font-light">
            <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-2 font-serif">Profile Information:</h2>
                <div className="line h-1 w-20 bg-blue-300"></div>
            </div>
            <ul className="text-xl list-disc pl-4 mt-4 font-sans">
              <li><span style={{ fontWeight: 'bold' }}>Email:</span> {profileInfo.email}</li>
              <li><span style={{ fontWeight: 'bold' }}>NUID:</span> {profileInfo.NUID}</li>
              <li><span style={{ fontWeight: 'bold' }}>Location:</span> {profileInfo.location}</li>
              <li><span style={{ fontWeight: 'bold' }}>GitHub:</span> {profileInfo.github}</li>
            </ul>
          </div><br></br>

          <div>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-2">Booked Events :</h2>
              <div className="line h-1 w-20 bg-blue-300"></div>
            </div> <br></br>
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
}

export default Profile;
