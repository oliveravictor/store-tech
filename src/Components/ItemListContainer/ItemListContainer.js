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
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
