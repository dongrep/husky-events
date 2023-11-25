const MenuLink = ({ item }) => {
  return (
    <div className="menu-container group hover:bg-bgSecondary">
      {item.icon}
      {item.title}
    </div>
  );
};

export default MenuLink;
