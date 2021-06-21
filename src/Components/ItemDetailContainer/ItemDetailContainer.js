import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../Assets/Data/Products.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);
  const { id: prodId } = useParams();

  const getItems = () => {
    new Promise((result, reject) => {
      setTimeout(() => {
        result(Products);
      }, 2000);
    }).then((response) => setDetails(response));
  };

  useEffect(() => {
    getItems(prodId);
  }, [prodId]);

  return (
    <div>
      <h2 className={"text-center mt-4"}>Descripción del producto</h2>
      <ItemDetail details={details} />
    </div>
  );
};

export default ItemDetailContainer;
