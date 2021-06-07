import { useState } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  let stockUpdate = stock - counter;

  const handleAdd = () => {
    counter < stock ? setCounter(counter + 1) : alert("No hay stock");
  };

  const handleSubtract = () => counter > initial && setCounter(counter - 1);

  const addCart = () => {
    onAdd();
    alert(
      `¡Gracias por tu compra de ${counter} productos, quedan ${stockUpdate} en stock!`
    );
  };

  return (
    <Container
      className={"d-flex justify-content-center"}
      style={{
        height: "500px",
        width: "400px",
      }}
    >
      <Row className={"mt-3"}>
        <Col
          style={{
            border: "1px solid brown",
          }}
        >
          <img
            className={"mt-3"}
            src="https://falabella.scene7.com/is/image/Falabella/8506788_1?wid=800&hei=800&qlt=70"
            style={{
              width: "250px",
            }}
          />
          <h4 className={"mb-4 mt-3"}>
            Cantidad: {counter} - Stock: {stockUpdate}
          </h4>
          <Button variant={"dark"} onClick={() => handleSubtract()}>
            -
          </Button>
          <input
            disabled={true}
            placeholder={counter}
            className={"text-center"}
          />
          <Button variant={"dark"} onClick={() => handleAdd()}>
            +
          </Button>

          <Button
            className={"mt-1 d-flex justify-content-center btn-block"}
            variant={"dark"}
            onClick={() => addCart()}
          >
            Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default ItemCount;
