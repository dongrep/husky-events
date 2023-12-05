import React, { useContext } from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdAttachMoney,
  MdLogout,
} from "react-icons/md";
import { CiLight } from "react-icons/ci";
import "./sidebar.css";
import { GiPartyFlags } from "react-icons/gi";
import MenuLink from "../menuLink/MenuLink";
import userImg from "../../assets/images/noavatar.png";
import ThemeContext from "../../context/ThemeContext";

const Sidebar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div className="sidebar-container">
      <div className="user">
        <img
          src={userImg}
          alt="User Image"
          width="50"
          height="50"
          className="userImage"
        />
        <div className="userDetail">
          <span className="username">John Doe</span>
          <span className="userTitle">Admin</span>
        </div>
      </div>
      <ul className="list">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="cat">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <button className="logout">
        <MdLogout />
        Logout
      </button>
      <div className="mode">
        <CiLight />
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <div className="w-11 h-6 bg-black peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
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

export default Sidebar;
