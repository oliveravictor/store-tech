import Cartwidget from "../Cartwidget/Cartwidget";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="menu__container">
      <Link exact to="/store-tech/">
        <label className="menu__label">💻Store Tech</label>
      </Link>
      <ul className="menu">
        <NavLink
          className="menu__options"
          to="/store-tech/category/celulares"
          activeClassName={"active"}
        >
          Celulares
        </NavLink>
        <NavLink
          className="menu__options"
          to="/store-tech/category/notebooks"
          activeClassName={"active"}
        >
          Notebooks
        </NavLink>
        <NavLink
          className="menu__options"
          to="/store-tech/category/televisores"
          activeClassName={"active"}
        >
          Televisores
        </NavLink>
        <NavLink
          className="menu__options"
          to="/store-tech/cart"
          activeClassName={"cartOn"}
        >
          <Cartwidget />
        </NavLink>
      </ul>
    </header>
  );
};

export default Navbar;
