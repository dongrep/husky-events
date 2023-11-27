import DefaultLayout from "../components/Layout/DefaultLayout";
import EventSearch from "../components/Event/EventSearch";
import EventCard from "../components/Event/EventCard";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import axios from "axios";

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    setLoading(true);
    const response = await axios.get("http://localhost:5000/event/events");
    const data = await response.data;
    console.log(data);
    setEvents(data);
    setLoading(false);
  };

  useEffect(() => {
    if (events.length > 0) return;
    fetchEvents();
  }, [loading, events]);

  return (
    <DefaultLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative w-full h-full">
          <div className="w-full mt-4 mb-12 relative h-36 lg:h-[595px] bg-yellow-600 rounded-md overflow-hidden">
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
          <div className="absolute lg:flex top-[50%] hidden w-full justify-center">
            <EventSearch />
          </div>
          <div className="lg:px-16 my-4 lg:my-24 ">
            <div className="text-lg font-semibold mb-6 mx-4">
              Upcoming <span className="text-primary">Events</span>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-4 gap-x-5 grid-cols-1 justify-between">
              {events.map((event, index) => (
                <EventCard key={event.name + index} event={event} />
              ))}
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Events;
