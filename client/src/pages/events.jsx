import DefaultLayout from "../components/Layout/DefaultLayout";
import EventFilter from "../components/Event/EventFilter";
import EventCard from "../components/Event/EventCard";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import axios from "axios";

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
    console.log(data);
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
          <div className="relative w-full mt-4 mb-12 h-36 lg:h-[595px] bg-yellow-600 rounded-lg overflow-hidden">
            <img
              src={"/hero.jpeg"}
              className="rounded-lg overflow-clip layout-fill object-cover w-full h-full"
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-4 gap-x-5 grid-cols-1 justify-between">
              {filteredEvents.slice(0, maxEvents).map((event, index) => (
                <EventCard key={event.name + index} event={event} />
              ))}
            </div>
            {showMoreEvents && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => updateMaxEvents()}
                  className="bg-primary text-white px-4 py-2 rounded-lg">
                  Show More
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Events;
