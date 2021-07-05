import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../Assets/Data/Products.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Load from "react-loader-spinner";

const ItemDetailContainer = () => {
  const [detail, setDetails] = useState([]);
  let { id: prodId } = useParams();
  const [product] = Products.filter((detail) => detail.id === parseInt(prodId));
  const [isLoading, setIsLoading] = useState(true);

  const getItems = () => {
    new Promise((result, reject) => {
      setTimeout(() => {
        setIsLoading(false);
        result(product);
      }, 2000);
    }).then((response) => setDetails(response));
  };

  useEffect(() => {
    getItems();
  }, [product, prodId]);

  return (
    <div>
      {isLoading === true ? (
        <Load />
      ) : (
        <>
          <h3 className={"text-center mt-4"}>Descripción del producto</h3>
          <ItemDetail detail={detail} />
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
