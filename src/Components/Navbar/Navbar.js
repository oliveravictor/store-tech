import Cartwidget from "../Cartwidget/Cartwidget";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="menu__container">
      <Link exact to="/">
        <label className="menu__label">💻Store Tech</label>
      </Link>
      <ul className="menu">
        <NavLink
          className="menu__options"
          to="/category/celulares"
          activeClassName={"active"}
        >
          Celulares
        </NavLink>
        <NavLink
          className="menu__options"
          to="/category/notebooks"
          activeClassName={"active"}
        >
          Notebooks
        </NavLink>
        <NavLink
          className="menu__options"
          to="/category/televisores"
          activeClassName={"active"}
        >
          Televisores
        </NavLink>
        <NavLink
          className="menu__options"
          to="/cart"
          activeClassName={"cartOn"}
        >
          <Cartwidget />
        </NavLink>
      </ul>
    </header>
  );
};

export default Navbar;
