const Navbar = ({ onSelectMenu }) => {
    return (
      <nav className="navbar">
        <button onClick={() => onSelectMenu("Food")}>Food</button>
        <button onClick={() => onSelectMenu("Drinks")}>Drinks</button>
        <button onClick={() => onSelectMenu("Brunch")}>Brunch</button>
      </nav>
    );
  };
  
  export default Navbar;
  