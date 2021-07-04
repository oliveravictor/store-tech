import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import Products from "../../Assets/Data/Products.json";
import Loader from "react-loader-spinner";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((result, reject) => {
      setTimeout(() => {
        setIsLoading(false);
        result(Products);
      }, 2000);
    }).then((response) => setItems(response));
  }, []);

  return (
    <div>{isLoading === true ? <Loader /> : <ItemList items={items} />}</div>
  );
};

export default ItemListContainer;
