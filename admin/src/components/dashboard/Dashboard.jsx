import Card from "../card/Card";
import { cards } from "../../data";
import Transactions from "../transactions/Transactions";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <div className="wrapper">
          <div className="main">
            <div className="cards">
              {cards.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </div>
            <Transactions />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
