import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="dashboard-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Navbar />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
