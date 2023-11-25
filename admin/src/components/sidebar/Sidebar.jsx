import React from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { GiPartyFlags } from "react-icons/gi";
import MenuLink from "../menuLink/MenuLink";
import userImg from "../../assets/images/noavatar.png";

const Sidebar = () => {
  return (
    <div className="sticky top-40 bg-bgSoft p-6 rounded-lg">
      <div className="flex items-center gap-4 mb-8">
        <img
          src={userImg}
          alt="User Image"
          width="50"
          height="50"
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-bold">John Doe</span>
          <span className="text-xs">Admin</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-textSoft font-bold text-sm mb-2 block">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <button className="logout flex items-center gap-4 cursor-pointer w-full py-4 rounded-lg hover:bg-bgSecondary">
        <MdLogout className="text-xl" />
        Logout
      </button>
      <div className="mode flex items-center gap-4 py-4 w-full cursor-pointer">
        <CiLight className="text-xl" />
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
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
