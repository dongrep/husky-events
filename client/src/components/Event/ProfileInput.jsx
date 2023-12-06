import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg mb-10 text-center shadow-gray-600">
      <h3 className="text-xl font-semibold mb-2">{event.name} </h3>
      <p className="text-gray-500 font-semibold"><span style={{ fontWeight: 'bold' }}>Event Dates:</span> {event.schedulTime}</p>
    </div>
  );
};

export default EventCard;