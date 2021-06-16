import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../Assets/Data/Products.json";
import { useState } from "react";
// import { Button } from "react-bootstrap";

const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);

  const getItems = () => {
    new Promise((result, reject) => {
      setTimeout(() => {
        result(Products);
      }, 3000);
    }).then((response) => setDetails(response));
  };

  return (
    <div>
      {getItems()}
      <ItemDetail details={details} />
    </div>
  );
};

export default ItemDetailContainer;
