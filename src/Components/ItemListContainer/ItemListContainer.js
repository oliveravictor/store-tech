import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import Products from "../../Assets/Data/Products.json";
import ScaleLoader from "react-spinners/ScaleLoader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    new Promise((result, reject) => {
      setTimeout(() => {
        setLoading(false);
        result(Products);
      }, 1000);
    }).then((response) => setItems(response));
  }, []);

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
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
