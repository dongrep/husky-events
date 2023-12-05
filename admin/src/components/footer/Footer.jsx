import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo">Husky Events</div>
      <div className="socials">
        <MdFacebook />
        <FaXTwitter />
        <FaInstagram />
      </div>
      <div className="text">© All rights reserved.</div>
    </div>
  );
};

export default Footer;
