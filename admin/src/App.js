import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import AddEvent from "./components/addEvent/AddEvent";
import AddUser from "./components/addUser/AddUser";
import Dashboard from "./components/dashboard/Dashboard";
import EventDetails from "./components/eventDetail/EventDetails";
import Events from "./components/events/Events";
import UserDetails from "./components/userDetail/UserDetails";
import Users from "./components/users/Users";
import { useState, useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import NotFound from "./components/notFound/NotFound";
import Login from "./components/login/AdminLogin";
import { AuthContext } from "./context/authContext";

function App() {
  const [theme, setTheme] = useState("dark");
  const { user } = useContext(AuthContext);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    if (!user) {
      navigate("/login");
      return <Login />;
    }

    return children;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              {/* Users Path */}
              <Route path="users">
                <Route
                  path=":userid"
                  element={
                    <ProtectedRoute>
                      <UserDetails />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="add"
                  element={
                    <ProtectedRoute>
                      <AddUser />
                    </ProtectedRoute>
                  }
                />
                <Route
                  index
                  element={
                    <ProtectedRoute>
                      <Users />
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route path="events">
                <Route
                  path=":eventid"
                  element={
                    <ProtectedRoute>
                      <EventDetails />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="add"
                  element={
                    <ProtectedRoute>
                      <AddEvent />
                    </ProtectedRoute>
                  }
                />
                <Route
                  index
                  element={
                    <ProtectedRoute>
                      <Events />
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route
                path="login"
                element={user ? <Dashboard /> : <Login />}
              ></Route>
              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <NotFound />
                  </ProtectedRoute>
                }
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
