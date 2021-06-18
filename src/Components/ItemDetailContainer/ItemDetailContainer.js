import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../Assets/Data/Products.json";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);

  const getItems = () => {
    new Promise((result, reject) => {
      setTimeout(() => {
        result(Products);
      }, 4000);
    }).then((response) => setDetails(response));
  };

  return (
    <div>
      <h2 className={"text-center"}>Detalle del producto</h2>
      {getItems()}
      <ItemDetail details={details} />
    </div>
  );
};

export default ItemDetailContainer;
