import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const addItem = (item, quantity) => {
    setCart([...cart, { item, quantity }]);
  };

  const removeItem = (itemId) => {
    const filterProd = cart.filter((x) => x.item.id !== itemId);
    setCart(filterProd);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const itemProd = cart.find((item) => item.id === id);
    if (itemProd) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
