import "./Checkout.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContex";
import DotLoader from "react-spinners/DotLoader";
import { Form, Button, Table, InputGroup } from "react-bootstrap";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const Checkout = () => {
  const cartItems = useContext(CartContext);
  const [orderNow, setOrderNow] = useState({});
  const [idOrder, setIdOrder] = useState("");
  const [dataUser, setDataUser] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [payment, setPayment] = useState(false);

  useEffect(() => {
    setOrderNow({
      buyer: dataUser,
      items: cartItems.cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: cartItems.total,
    });
  }, [dataUser, cartItems.total, cartItems.cart]);

  const handleInput = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.id]: e.target.value,
    });
  };

  const handleBuy = () => {
    setLoading(true);
    setPayment(true);
    const db = getFirestore();
    const orders = db.collection("orders");
    orders
      .add(orderNow)
      .then(({ id }) => {
        setIdOrder(id);
        let batch = db.batch();
        const dataBase = db.collection("items");

        cartItems.cart.forEach((x) => {
          batch.update(dataBase.doc(x.id), {
            stock: x.item.stock - x.quantity,
          });
        });

        batch.commit().then(() => {
          cartItems.clear();
        });
      })
      .catch((e) => {
        console.log("ocurrió un error", e);
      })
      .finally(() => {
        console.log("Operación exitosa");
        setLoading(false);
      });
  };

  if (payment) {
    if (loading) {
      return (
        <div
          className={"d-flex justify-content-center mt-5"}
          style={{ minHeight: "100vh" }}
        >
          <DotLoader color={"#A19882"} loading={loading} size={100} />
        </div>
      );
    } else {
      return (
        <div className={"text-center"} style={{ minHeight: "100vh" }}>
          <h1 className={"mt-4"}>OPERACIÓN EXITOSA</h1>
          <p>Código de compra: {idOrder && <b>{idOrder}</b>}</p>
          <p>¡Gracias por comprar en StoreTech!</p>
        </div>
      );
    }
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="checkout">
        <p className="checkout__title">Ingresá tus datos</p>
        <Form>
          <InputGroup className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              onChange={handleInput}
              type="text"
              placeholder="Ingresá tu nombre"
              required="required"
              id="name"
            />
            <Form.Label>Correo</Form.Label>
            <Form.Control
              onChange={handleInput}
              type="email"
              placeholder="Correo@ejemplo.com"
              required="required"
              id="email"
            />
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              onChange={handleInput}
              type="number"
              placeholder="Tu número sin el 0 y sin el 15"
              required="required"
              id="phone"
            />
          </InputGroup>
        </Form>
        <p className="checkout__title">Mi Carrito</p>
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
        <div className={"d-flex justify-content-center"}>
          <Button
            type="submit"
            className={"checkout__button"}
            onClick={handleBuy}
          >
            Procesar pago
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
