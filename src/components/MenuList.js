import MenuItem from "./MenuItem";
import '../menu.css';


const MenuList = ({ menuTitle, items }) => {
  return (
    <div className="menu-container">
      <h2>{menuTitle}</h2>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default MenuList;
