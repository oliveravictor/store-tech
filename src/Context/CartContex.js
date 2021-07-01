import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
  const addItem = (item, quantity) => {
    console.log("Item:", item, "Quantity:", quantity);
  };

  const removeItem = (itemId) => {
    console.log(itemId);
  };

  const clear = () => {
    console.log("limpiar carrito");
  };

  const isInCart = (id) => {
    console.log(id);
  };

  return (
    <CartContext.Provider value={{ addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
