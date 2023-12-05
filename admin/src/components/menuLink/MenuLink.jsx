import { Link, useLocation } from "react-router-dom";

import "./menuLink.css";

const MenuLink = ({ item }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Link
      to={item.path}
      className={`menu-container ${
        ((item.path !== "/" && pathname.includes(item.path)) ||
          pathname === item.path) &&
        "active"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
