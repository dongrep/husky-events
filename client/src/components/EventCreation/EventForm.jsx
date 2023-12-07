import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Modal from "../Modals/Modal";
import FormInput from "../Event/FormInput";
import Checkbox from "../FormComponents/Checkbox";
import { AuthContext } from "../../context/authContext";

const EventForm = () => {
  const { user } = useContext(AuthContext);

  const allowedTags = [
    "sports",
    "food",
    "travel",
    "art",
    "dance",
    "comedy",
    "fashion",
  ];

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [locationUrl, setLocationUrl] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState("");

  useEffect(() => {
    if (user) {
      setOrganizer(user.firstName + " " + user.lastName);
    }
  }, [user]);

  const updateTags = (e) => {
    if (e.target.checked) {
      setTags([...tags, e.target.value]);
    } else {
      setTags(tags.filter((tag) => tag !== e.target.value));
    }
  };

  const updateModals = () => {
    setError(false);
    setSuccess(false);
  };

  const createEvent = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      description: description,
      organizer: user._id,
      startTime: startTime,
      endTime: endTime,
      location: location,
      image: image,
      locationUrl: locationUrl,
      tags: tags,
    };
    try {
      const response = await axios.post(
        `http://localhost:8000/event/create`,
        data,
      );

      if (response.status === 204) {
        console.log(response);
        setShowMessage("Missing required fields");
        setError(true);
        return;
      }

      if (response.status !== 200) {
        alert("Error creating event");
        return;
      }
      await response.data;
      clearFields();
      setSuccess(true);
      setShowMessage("Event created successfully");
    } catch (err) {
      console.log(err);
      setShowMessage(err.message);
      setError(true);
    }
  };

  const clearFields = () => {
    setName("");
    setDescription("");
    setStartTime("");
    setEndTime("");
    setLocation("");
    setImage("");
    setLocationUrl("");
    setTags([]);
  };

  return (
    <div
      onClick={() => updateModals()}
      className="flex flex-col justify-center rounded-lg p-8 mx-4 my-12 shadow-2xl shadow-gray-700">
      {error && <Modal title="Error" message={showMessage} />}
      {success && <Modal title="Success" message={showMessage} />}
      <div className="text-2xl font-semibold my-4">Create Event</div>
      <form className="w-full flex-col">
        <div className="flex w-full flex-col space-y-4">
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <FormInput label="Name" value={name} setValue={setName} />
            <FormInput
              label="Organizer"
              value={organizer}
              setValue={null}
              disabled={true}
            />
          </div>
          <div className="flex flex-col lg:flex-row w-full justify-center gap-5">
            <div className="flex lg:w-1/2 flex-col space-y-1">
              <label htmlFor="scheduleTime">Start Time</label>
              <input
                className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                type="datetime-local"
                id="scheduleTime"
                name="scheduleTime"
                value={startTime}
                min={new Date()}
                max="2035-06-14T00:00"
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="flex lg:w-1/2 flex-col space-y-1">
              <label htmlFor="scheduleTime">End Time</label>
              <input
                className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                type="datetime-local"
                id="scheduleTime"
                name="scheduleTime"
                value={endTime}
                min={new Date()}
                max="2035-06-14T00:00"
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={description}
              placeholder="Your description"
              className="border border-gray-300 h-40 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            <FormInput label="Image" value={image} setValue={setImage} />
            <FormInput
              label="Location"
              value={location}
              setValue={setLocation}
            />
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="flex-1">
              <div className="lg:h-[210px] w-full lg:w-1/2 mx-auto rounded-lg overflow-clip">
                <img
                  src={
                    image !== ""
                      ? image
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"
                  }
                  alt={"Placeholder"}
                  className="object-contain w-full rounded-lg overflow-hidden"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col space-y-3">
              <FormInput
                label="Location URL"
                value={locationUrl}
                setValue={setLocationUrl}
              />
              <label htmlFor="tags">Tags</label>
              <div className="flex lg:flex-row flex-col space-x-2">
                {allowedTags.map((tag) => (
                  <Checkbox
                    id={tag}
                    label={tag}
                    name={tag}
                    checked={tags.includes(tag)}
                    updateValue={updateTags}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button
            onClick={(e) => createEvent(e)}
            className="px-4 py-2 rounded-lg bg-primary text-white">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
