import Cartwidget from "../Cartwidget/Cartwidget";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <label className="title">💻 Store Tech</label>
      <ul>
        <NavLink exact to={"/"} activeClassName={"active"}>
          Home
        </NavLink>
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
