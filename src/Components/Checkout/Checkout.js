import "./Checkout.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContex";
import { Form, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cartItems = useContext(CartContext);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="checkout">
        <p className="checkout__title">Ingresá tus datos</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresá tu nombre"
              required="required"
            />
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Correo@ejemplo.com"
              required="required"
            />
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="Tu número sin el 0 y sin el 15"
              required="required"
            />
          </Form.Group>
        </Form>
        <p className="checkout__title">Tu Compra</p>
        <Table>
          <thead>
            <tr>
              <th>PRODUCTO</th>
              <th>PRECIO</th>
              <th>CANTIDAD</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          {cartItems.cart.map(({ item, quantity }) => {
            return (
              <thead key={item.id}>
                <tr>
                  <th className={"checkout__th"}>{item.title}</th>
                  <th className={"checkout__th"}>${item.price}</th>
                  <th className={"checkout__th"}>{quantity}</th>
                  <th className={"checkout__th"}>${quantity * item.price}</th>
                </tr>
              </thead>
            );
          })}
        </Table>
        <p className={"checkout__total"}>Total: ${cartItems.total}</p>
        <Link to="/orders" className={"d-flex justify-content-center"}>
          <Button className={"checkout__button"}>Generar pago</Button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
