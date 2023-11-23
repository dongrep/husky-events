import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Events from "./pages/events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Events />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
