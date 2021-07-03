import { FaShoppingCart } from "react-icons/fa";
import "./Cartwidget.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContex";

const Cartwidget = () => {
  const { cart } = useContext(CartContext);

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity;
  }

  return (
    <>
      <FaShoppingCart className="cart" />
      {total >= 1 && <span className={"cart__total"}>{total}</span>}
    </>
  );
};

export default Cartwidget;
