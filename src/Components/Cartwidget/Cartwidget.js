import { FaShoppingCart } from "react-icons/fa";
import "./Cartwidget.css";
// import { useContext } from "react";
// import { CartContext } from "../../Context/CartContex";

const Cartwidget = () => {
  // const context = useContext(CartContext);

  return (
    <>
      <FaShoppingCart className="cart" />
    </>
  );
};

export default Cartwidget;
