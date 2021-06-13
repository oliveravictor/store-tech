import Item from "../Item/Item";
import { Row, Col } from "react-bootstrap";

const ItemList = ({ items }) => {
  return (
    <>
      <h2 className={"text-center"}>Productos</h2>
      {items.map((item) => (
        <Row>
          <Col className={"d-flex justify-content-center mt-4"}>
            <Item key={item.id} item={item} />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default ItemList;
