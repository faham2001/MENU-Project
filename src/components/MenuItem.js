import '../menu.css';

const MenuItem = ({ name, description, price }) => {
  return (
    <div className="menu-item">
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <span>${price}</span>
    </div>
  );
};

export default MenuItem;
