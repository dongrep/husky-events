import React, { useState, useContext } from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import EventCard from '../components/Event/ProfileInput';
import { AuthContext } from "../context/authContext";
import { IoPencilOutline } from 'react-icons/io5';

const Profile = () => {
  const { user } = useContext(AuthContext);

  const profileImages = {
    Male: './Male.jpg', 
    Female: './Female.jpg', 
  };

  const [editMode, setEditMode] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState('');

  const defaultImageUrl = './Neutral.jpg'; 

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleImageUrlChange = (e) => {
    setNewImageUrl(e.target.value);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  const profileImage = profileImages[user?.gender];

  return (
    <DefaultLayout>
      <div className="w-full items-center justify-center mb-6 mt-6 shadow-md shadow-black">
        <div className="bg-white p-10 rounded-md shadow-md">
        <div className="flex items-center justify-center mb-4">
          {editMode ? (
              <input
                type="text"
                value={newImageUrl}
                onChange={handleImageUrlChange}
                className="rounded-full h-10 border-2 border-black mr-2 px-2 mt-14"
              />
            ) : (
              <img
                src={newImageUrl || defaultImageUrl} 
                alt="Profile"
                className="rounded-full border-2 h-24 mr-2"
              />
            )}
            <label
              htmlFor="profileImage"
              className="cursor-pointer bg-blue-500 text-white rounded-full p-1.5 mt-14"
              onClick={handleEditClick}
            >
              <IoPencilOutline />
            </label>
            {editMode && (
              <button className="ml-2 bg-green-500 text-white rounded-full p-2 mt-14" onClick={handleSaveClick}>
                Save
              </button>
          )}
        </div>
        <h1 className="text-3xl font-bold mb-2 text-center"><p className='text-3xl'>Hello! {`${user?.firstName} ${user?.lastName}`}</p></h1>
        <p className="text-gray-500 mb-4"></p>

          {/* Profile Information */}
          <div className="mb-4 font-light">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-2">Profile Information:</h2>
              <div className="line h-1 w-20 bg-blue-300"></div>
            </div>
            <ul className="text-xl list-disc pl-4 mt-4 font-sans">
              <li>
                <span>Email: {user?.email}</span>
              </li>
              <li>
                <span>NUID: {user?.nuid}</span> 
              </li>
              <li>
                <span>Phone: {user?.phone}</span> 
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
            <div className='flex flex-row direction gap-4'>
              {user?.registeredEvents.length === 0 && <p>You haven't booked any events.</p>}
              {user?.registeredEvents.map(event => (
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
