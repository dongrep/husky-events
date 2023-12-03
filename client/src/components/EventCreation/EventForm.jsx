import React, { useState } from "react";

const EventForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);

  const updateTags = (e) => {
    if (e.target.checked) {
      setTags([...tags, e.target.value]);
    } else {
      setTags(tags.filter((tag) => tag !== e.target.value));
    }
  };

  const register = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      description: description,
      organizer: organizer,
      scheduleTime: scheduleTime,
      duration: duration,
      location: location,
      image: image,
      tags: tags,
    };
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="text-2xl font-semibold my-4">Create Event:</div>
      <form className="w-full flex-col">
        <div className="flex w-full flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Your description"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="organizer">Organizer</label>
            <input
              type="text"
              name="organizer"
              id="organizer"
              placeholder="Your organizer"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={(e) => setOrganizer(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="scheduleTime">Schedule Time</label>
            <input
              type="datetime-local"
              id="scheduleTime"
              name="scheduleTime"
              min="2018-06-07T00:00"
              max="2035-06-14T00:00"
              onChange={(e) => setScheduleTime(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="duration">Duration</label>
            <input
              type="number"
              name="duration"
              id="duration"
              placeholder="Event Duration"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Event location"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Event image"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="tags">Tags</label>
            {/* drop down to select multiple tags */}

            <div className="flex flex-row space-x-2">
              <div className="flex flex-row space-x-2">
                <input
                  type="checkbox"
                  id="music"
                  name="music"
                  value="music"
                  onChange={(e) => updateTags(e)}
                />
                <label htmlFor="music">Music</label>
              </div>
              <div className="flex flex-row space-x-2">
                <input
                  type="checkbox"
                  id="sports"
                  name="sports"
                  value="sports"
                  onChange={(e) => updateTags(e)}
                />
                <label htmlFor="sports">Sports</label>
              </div>
              <div className="flex flex-row space-x-2">
                <input
                  type="checkbox"
                  id="food"
                  name="food"
                  value="food"
                  onChange={(e) => updateTags(e)}
                />
                <label htmlFor="food">Food</label>
              </div>
              <div className="flex flex-row space-x-2">
                <input
                  type="checkbox"
                  id="travel"
                  name="travel"
                  value="travel"
                  onChange={(e) => updateTags(e)}
                />
                <label htmlFor="travel">Travel</label>
              </div>
              <div className="flex flex-row space-x-2">
                <input
                  type="checkbox"
                  id="art"
                  name="art"
                  value="art"
                  onChange={(e) => updateTags(e)}
                />
                <label htmlFor="art">Art</label>
              </div>
              <div className="flex flex-row space-x-2">
                <input
                  type="checkbox"
                  id="dance"
                  name="dance"
                  value="dance"
                  onChange={(e) => updateTags(e)}
                />
                <label htmlFor="dance">Dance</label>
              </div>
              <div className="flex flex-row space-x-2">
                <input
                  type="checkbox"
                  id="comedy"
                  name="comedy"
                  value="comedy"
                  onChange={(e) => updateTags(e)}
                />
                <label htmlFor="comedy">Comedy</label>
              </div>
              <div className="flex flex-row space-x-2">
                <input
                  type="checkbox"
                  id="fashion"
                  name="fashion"
                  value="fashion"
                  onChange={(e) => updateTags(e)}
                />
                <label htmlFor="fashion">Fashion</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button
            onClick={(e) => register(e)}
            className="px-4 py-2 rounded-md bg-primary text-white">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
