import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MenuList from "./components/MenuList";
import MenuForm from "./components/MenuForm";
import './menu.css';


const App = () => {
  const [selectedMenu, setSelectedMenu] = useState("Food"); // Default menu is "Food"
  const [menuItems, setMenuItems] = useState({
    Food: [
      { name: "Burger", description: "A delicious beef burger.", price: 10 },
      { name: "Pizza", description: "Cheese and tomato pizza.", price: 15 },
    ],
    Drinks: [
      { name: "Cinnamon Toast Crunch", description: "Peanut butter whiskey with cinnamon.", price: 16 },
      { name: "Moet Spritz", description: "A refreshing spritz with Moet.", price: 20 },
    ],
    Brunch: [
      { name: "Avocado Toast", description: "Toast with avocado and poached eggs.", price: 12 },
      { name: "Pancakes", description: "Fluffy pancakes with maple syrup.", price: 14 },
    ],
  });

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };

  const handleAddItem = (item) => {
    setMenuItems((prevItems) => ({
      ...prevItems,
      [selectedMenu]: [...prevItems[selectedMenu], item],
    }));
  };

  return (
    <div>
      <Header></Header>
      <Navbar onSelectMenu={handleMenuSelect} />
      <MenuForm onAddItem={handleAddItem} />
      <MenuList menuTitle={selectedMenu} items={menuItems[selectedMenu]} />
      <Footer></Footer>
    </div>
  );
};

export default App;
