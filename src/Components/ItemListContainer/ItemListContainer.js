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
    <div className={"container-fluid"}>
      <h2 className={"mt-0 text-center"}>¡Bienvenidos a Store Tech!</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
