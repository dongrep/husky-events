import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="p-5 rounded-lg bg-bgSoft flex items-center justify-between">
      <div className="text-textSoft font-bold capitalize">Husky Events</div>
      <div className="flex items-center gap-20">
        <div className="flex gap-20">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
