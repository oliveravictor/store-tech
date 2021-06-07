import Cartwidget from "../Cartwidget/Cartwidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <label className="title">💻 Store Tech</label>
      <ul>
        <li>
          <a href="#">Notebooks</a>
        </li>
        <li>
          <a href="#">Celulares</a>
        </li>
        <li>
          <a href="#">Televisores</a>
        </li>
        <label>
          <Cartwidget className="cart" />
        </label>
      </ul>
    </header>
  );
};

export default Navbar;
