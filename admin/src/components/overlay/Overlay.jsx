// src/components/Overlay.js
import React, { useContext } from "react";

import MenuLink from "../menuLink/MenuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdAttachMoney,
  MdLogout,
} from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { GiPartyFlags } from "react-icons/gi";
import ThemeContext from "../../context/ThemeContext";

import "./overlay.css";

const Overlay = ({ isOpen, onClose }) => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className={`overlay ${isOpen ? "visible" : ""}`}>
      <div className="overlay-content">
        <button className="close-btn" onClick={onClose}>
          <span>&times;</span>
        </button>
        <nav className="overlay-nav">
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <span className="cat">{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          ))}
          <button className="logout">
            <MdLogout />
            Logout
          </button>
          <div className="mode">
            <CiLight />
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                onChange={toggleTheme}
                checked={theme === "dark"}
              />
              <div class="w-11 h-6 bg-black peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </nav>
      </div>
    </div>
  );
};

const menuItems = [
  {
    title: "Sections",
    list: [
      {
        title: "Dashboard",
        path: "/",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Events",
        path: "/events",
        icon: <GiPartyFlags />,
      },
      {
        title: "Transactions",
        path: "/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
];

export default Overlay;
