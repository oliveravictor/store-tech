import Cartwidget from "../Cartwidget/Cartwidget";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link exact to={"/"}>
        <label className="title">💻 Store Tech</label>
      </Link>
      <ul>
        <NavLink to={"/celulares"} activeClassName={"active"}>
          Celulares
        </NavLink>
        <NavLink to={"/notebooks"} activeClassName={"active"}>
          Notebooks
        </NavLink>
        <NavLink to={"/televisores"} activeClassName={"active"}>
          Televisores
        </NavLink>
        <label>
          <NavLink to={"/cart"} activeClassName={"cartOn"}>
            <Cartwidget className="cart" />
          </NavLink>
        </label>
      </ul>
    </header>
  );
};

export default Navbar;
