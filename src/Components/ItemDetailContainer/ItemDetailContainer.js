import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../Assets/Data/Products.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const ItemDetailContainer = () => {
  const [detail, setDetails] = useState([]);
  let { id: prodId } = useParams();
  const [product] = Products.filter((detail) => detail.id === parseInt(prodId));
  const [Loading, setLoading] = useState(true);

  const getItems = () => {
    new Promise((result, reject) => {
      setTimeout(() => {
        setLoading(false);
        result(product);
      }, 1000);
    }).then((response) => setDetails(response));
  };

  useEffect(() => {
    getItems();
  }, [product, prodId]);

  return (
    <div style={{ minHeight: "100vh" }}>
      {Loading === true ? (
        <div className={"d-flex justify-content-center mt-5"}>
          <ScaleLoader
            color={"#343A40"}
            loading={Loading}
            height={100}
            width={10}
            radius={6}
            margin={6}
          />
        </div>
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
