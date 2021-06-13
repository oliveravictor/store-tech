import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import Products from "../../Assets/Data/Products.json";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((result, reject) => {
      setTimeout(() => {
        result(Products);
      }, 2000);
    }).then((response) => setItems(response));
  }, []);

  return (
    <>
      <h2 className={"mt-4 text-center"}>¡Bienvenidos a Store Tech!</h2>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
