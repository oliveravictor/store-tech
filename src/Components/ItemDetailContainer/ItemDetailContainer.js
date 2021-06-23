import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../Assets/Data/Products.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detail, setDetails] = useState([]);
  let { id: prodId } = useParams();
  const [product] = Products.filter((detail) => detail.id === parseInt(prodId));

  const getItems = () => {
    new Promise((result, reject) => {
      setTimeout(() => {
        result(product);
      }, 2000);
    }).then((response) => setDetails(response));
  };

  useEffect(() => {
    getItems();
  }, [product, prodId]);

  return (
    <div>
      <h2 className={"text-center mt-4"}>Descripción del producto</h2>
      <ItemDetail detail={detail} />
    </div>
  );
};

export default ItemDetailContainer;
