import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import "./navbar.css";
import Overlay from "../overlay/Overlay";

const Navbar = () => {
  // const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="navbar-container">
      <GiHamburgerMenu
        onClick={handleClick}
        className="mobile"
        style={{ fontSize: "18px" }}
      />
      <div className="logo-title">Husky Events</div>
      <div className="menu">
        <div className="icons">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
      <Overlay isOpen={isOpen} onClose={closeMenu} />
    </div>
  );
};

export default Navbar;
