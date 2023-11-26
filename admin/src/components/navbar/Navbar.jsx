import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

import "./navbar.css";

const Navbar = () => {
  // const pathname = usePathname();

  return (
    <div className="navbar-container">
      <div className="title">Husky Events</div>
      <div className="menu">
        <div className="icons">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
