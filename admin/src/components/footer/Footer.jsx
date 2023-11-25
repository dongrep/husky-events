import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-between mt-30 text-text bg-bgSoft p-20 rounded-lg">
      <div className="font-bold text-textSoft">Husky Events</div>
      <div className="flex space-x-10">
        <MdFacebook className="text-2xl cursor-pointer transition-all duration-500 ease-in-out hover:text-textSoft" />
        <FaXTwitter className="text-2xl cursor-pointer transition-all duration-500 ease-in-out hover:text-textSoft" />
        <FaInstagram className="text-2xl cursor-pointer transition-all duration-500 ease-in-out hover:text-textSoft" />
      </div>
      <div className="text-xs">© All rights reserved.</div>
    </div>
  );
};

export default Footer;
