import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../Assets/Data/Products.json";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   new Promise((result, reject) => {
  //     setTimeout(() => {
  //       result(Products);
  //     }, 2000);
  //   }).then((response) => setItems(response));
  // }, []);

  return (
    <>
      <p>red</p>
    </>
  );
};

export default ItemDetailContainer;

// {items.map((item) => (
//   <Row>
//     <Col className={"d-flex justify-content-center mt-4"}>
//       <Item key={item.id} item={item} />
//     </Col>
//   </Row>
// ))}
