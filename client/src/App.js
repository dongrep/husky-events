import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Events from "./pages/events";
import EventDetails from "./pages/eventDetails";
import Hero from "./components/Layout/Hero";
import About from './pages/About';
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Events />}></Route>
        <Route path="/event" element={<EventDetails />}></Route>
        <Route path="/hero" element={<Hero />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
