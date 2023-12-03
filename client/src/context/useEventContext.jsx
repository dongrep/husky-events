import { createContext, useContext, useState } from "react";

const EventContext = createContext();

//Create a provider to wrap the app in
const EventProvider = ({ children, eventObject }) => {
  const [currentEvent, setCurrentEvent] = useState(eventObject);

  const updateEvent = (eventObject) => {
    setCurrentEvent(eventObject);
    console.log(eventObject);
  };

  return (
    <EventContext.Provider value={{ currentEvent, updateEvent }}>
      {children}
    </EventContext.Provider>
  );
};

const useEventContext = () => useContext(EventContext);

export { useEventContext, EventProvider };
