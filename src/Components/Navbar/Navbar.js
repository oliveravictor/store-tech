import Cartwidget from "../Cartwidget/Cartwidget";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link exact to="/">
        <label className="title">💻 Store Tech</label>
      </Link>
      <ul className="menu">
        <NavLink
          className="menu-options"
          to="/category/celulares"
          activeClassName={"active"}
        >
          Celulares
        </NavLink>
        <NavLink
          className="menu-options"
          to="/category/notebooks"
          activeClassName={"active"}
        >
          Notebooks
        </NavLink>
        <NavLink
          className="menu-options"
          to="/category/televisores"
          activeClassName={"active"}
        >
          Televisores
        </NavLink>
        <NavLink className="menu-options" to="/cart" activeClassName={"cartOn"}>
          <Cartwidget className="cart" />
        </NavLink>
      </ul>
    </header>
  );
};

export default Navbar;
