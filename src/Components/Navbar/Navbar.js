import Cartwidget from "../Cartwidget/Cartwidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <label className="title">Store Tech</label>
      <ul>
        <li>
          <a href="#">seccion#1</a>
        </li>
        <li>
          <a href="#">seccion#2</a>
        </li>
        <li>
          <a href="#">seccion#3</a>
        </li>
        <label>
          <Cartwidget className="cart" />
        </label>
      </ul>
    </header>
  );
};

export default Navbar;
