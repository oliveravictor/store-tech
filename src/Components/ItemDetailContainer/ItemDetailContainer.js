import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../Assets/Data/Products.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  const getItems = () => {
    new Promise((result, reject) => {
      setTimeout(() => {
        result(Products);
      }, 2000);
    }).then((response) => setDetails(response));
  };

  useEffect(() => {
    getItems(id);
  }, [id]);

  return (
    <div>
      <p className={"text-center mt-4"}>
        item detail container - ITEM ID: {id}
      </p>
      <ItemDetail details={details} id={id} />
    </div>
  );
};

export default ItemDetailContainer;
