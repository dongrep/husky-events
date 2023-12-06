import DefaultLayout from "../components/Layout/DefaultLayout";
import EventFilter from "../components/Event/EventFilter";
import EventCard from "../components/Event/EventCard";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import { Link } from "react-router-dom";

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [maxEvents, setMaxEvents] = useState(6);
  const [showMoreEvents, setShowMoreEvents] = useState(false);
  const [filter, setFilter] = useState("");

  const fetchEvents = async () => {
    setLoading(true);
    const response = await axios.get("http://localhost:8000/event/events");
    const data = await response.data;
    setEvents(data);
    setFilteredEvents(data);
    setLoading(false);
  };

  useEffect(() => {
    if (filteredEvents.length > 6) {
      setShowMoreEvents(true);
    }
  }, [events]);

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredEvents([...events]);
      return;
    }
    const filteredEvents = events.filter((event) =>
      event.tags.includes(filter),
    );
    setFilteredEvents(filteredEvents);
  }, [filter]);

  const updateMaxEvents = () => {
    setMaxEvents(maxEvents + 6);
  };

  return (
    <DefaultLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative w-full h-full">
          <div className="relative w-full mt-4 mb-12 h-36 lg:h-[595px] bg-yellow-600 rounded-md overflow-hidden">
            <img
              src={"/hero.jpeg"}
              className="rounded-md overflow-clip layout-fill object-cover w-full h-full"
              alt="event"
            />
            <div className="absolute top-36 flex w-full justify-center text-white text-xl lg:text-4xl font-bold">
              <div className="flex flex-col">
                <div className="text-center">MADE FOR THOSE</div>
                <div className="text-center">WHO DO</div>
              </div>
            </div>
          </div>
          <div className="lg:flex w-full justify-center">
            <EventFilter selectedFilter={filter} updateFilter={setFilter} />
          </div>
          <div className="lg:px-16 my-4 lg:my-24 ">
            <div className="text-lg font-semibold mb-6 mx-4">
              Upcoming <span className="text-primary">Events</span>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-4 gap-x-5 grid-cols-1 justify-between max-h-max py-5 overflow-y-auto">
              {filteredEvents.slice(0, maxEvents).map((event, index) => (
                <EventCard key={event.name + index} event={event} />
              ))}
            </div>
            {showMoreEvents && (
              <div className="flex justify-center my-8">
                <button
                  onClick={() => updateMaxEvents()}
                  className="bg-primary text-white px-4 py-2 rounded-md">
                  Show More
                </button>
              </div>
            )}
          </div>
          <div className="flex w-full rounded-lg my-10 bg-primary h-80 lg:h-40">
            <div className="relative flex lg:flex-row flex-col lg:items-end items-center justify-center lg:gap-16 w-full h-full">
              <img
                src="/createEvent.png"
                alt="event_creation"
                className="lg:w-80 w-60"
              />
              <div className="flex flex-col justify-center items-center">
                <div className="text-white text-2xl font-bold">
                  Create your own event
                </div>
                <div className="text-white text-sm w-2/3 lg:w-full text-center">
                  Create your own event and share it with your friends
                </div>

                <Link to={"/create-event"} className="flex justify-center my-4">
                  <button
                    onClick={() => updateMaxEvents()}
                    className="bg-white text-primary px-4 py-2 rounded-md">
                    Create Event
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Events;
