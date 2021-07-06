import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContex";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].item.price * cart[i].quantity;
  }

  if (cart.length === 0) {
    return (
      <div className={"cartfont"} style={{ minHeight: "100vh" }}>
        <p className={"cart-title"} style={{ lineHeight: "5rem" }}>
          TU CARRITO ESTÁ VACÍO
        </p>
        <div className={"d-flex justify-content-center "}>
          <Link to="/">
            <Button
              style={{
                width: "10rem",
                borderRadius: "1rem",
              }}
              md={3}
              className={"mt-0"}
              variant={"dark"}
            >
              Ver Tienda
            </Button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ minHeight: "100vh" }}>
        <h2 className={"text-center mt-3"}>TU COMPRA</h2>
        {cart.map((x) => (
          <Row
            className={"mt-4 ml-5 mr-5"}
            style={{
              background: "wheat",
              borderRadius: "1rem",
            }}
            key={x.item.id}
          >
            <Col md={3}>
              <img
                className={"ml-3"}
                style={{ height: "12rem" }}
                src={x.item.pictureUrl}
              ></img>
            </Col>
            <Col md={3} className={"mt-5"}>
              <p>{x.item.model}</p>
            </Col>
            <Col md={2} className={"mt-5"}>
              <p>Cantidad: {x.quantity}</p>
            </Col>
            <Col md={2} className={"mt-5"}>
              <p>Precio: ${x.item.price}</p>
            </Col>
            <Col md={2} className={"mt-5"}>
              <Button variant={"dark"} onClick={() => removeItem(x.item.id)}>
                Eliminar
              </Button>
            </Col>
          </Row>
        ))}
        <h2 className={"text-center mt-5"}>Total: $ {total} </h2>
        <div className={"d-flex justify-content-center mb-5"}>
          <Button
            className={"mt-3 mb-5"}
            variant={"dark"}
            onClick={() => clear()}
          >
            Vaciar Carrito
          </Button>
          <Link to="/">
            <Button className={"ml-2 mt-3 mb-5"} variant={"dark"}>
              Comprar
            </Button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Cart;
