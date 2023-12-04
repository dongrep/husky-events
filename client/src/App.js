import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import RegistrationForm from "./pages/RegistrationForm";
import { EventProvider } from "./context/useEventContext";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import EventCreation from "./pages/EventCreation";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <EventProvider eventObject={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Events />}></Route>
          <Route path="event/:id" element={<EventDetails />}></Route>
          <Route
            path="event/:id/register"
            element={<RegistrationForm />}></Route>
          <Route path="/create-event" element={<EventCreation />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/user" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </EventProvider>
  );
}

export default App;
