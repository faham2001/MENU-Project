import { useState } from "react";
import '../menu.css';


const MenuForm = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, description, price });
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form className="menu-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Item Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default MenuForm;
