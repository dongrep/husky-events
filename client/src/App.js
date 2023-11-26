import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Events from "./pages/events";
import EventDetails from "./pages/eventDetails";
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Events />}></Route>
        <Route path="/event" element={<EventDetails />}></Route>
        <Route path="/event/register" element={<RegistrationForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
