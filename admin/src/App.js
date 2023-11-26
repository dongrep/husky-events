import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AddEvent from "./components/addEvent/AddEvent";
import AddUser from "./components/addUser/AddUser";
import Dashboard from "./components/dashboard/Dashboard";
import EventDetails from "./components/eventDetail/EventDetails";
import Events from "./components/events/Events";
import UserDetails from "./components/userDetail/UserDetails";
import Users from "./components/users/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="users">
              <Route path=":userid" element={<UserDetails />} />
              <Route path="add" element={<AddUser />} />
              <Route index element={<Users />} />
            </Route>
            <Route path="events">
              <Route path=":eventid" element={<EventDetails />} />
              <Route path="add" element={<AddEvent />} />
              <Route index element={<Events />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
