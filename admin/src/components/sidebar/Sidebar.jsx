import React, { useContext, useState } from "react";
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
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import AlertModal from "../alertModal/AlertModal";

const Sidebar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { user, dispatch } = useContext(AuthContext);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();

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
          <span className="username">
            {user?.firstName} {user?.lastName}
          </span>
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

      <button
        className="logout"
        onClick={() => {
          setShowLogoutModal(true);
        }}
      >
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
      <AlertModal
        message={"Are you sure you want to logout?"}
        isOpen={showLogoutModal}
        onConfirm={() => {
          localStorage.removeItem("token");
          dispatch({ type: "LOGOUT" });
          navigate("/login");
        }}
        onClose={() => {
          setShowLogoutModal(false);
        }}
      />
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
      // {
      //   title: "Transactions",
      //   path: "/transactions",
      //   icon: <MdAttachMoney />,
      // },
    ],
  },
];

export default Sidebar;
