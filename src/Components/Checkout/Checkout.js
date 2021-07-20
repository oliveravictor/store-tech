import "./Checkout.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContex";
import DotLoader from "react-spinners/DotLoader";
import { Form, Button, Table, InputGroup } from "react-bootstrap";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import { FcPaid } from "react-icons/fc";

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

  let inputClear =
    dataUser.name === "" || dataUser.phone === "" || dataUser.email === "";

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
        <div className={"checkout__loader"}>
          <DotLoader color={"#A19882"} loading={loading} size={100} />
        </div>
      );
    } else {
      return (
        <div className={"checkout__container"}>
          <div className={"checkout__token"}>
            <div className={"checkout__card"}>
              <p className={"checkout__card-title"}>Operación Exitosa</p>
              <p className={"checkout__card-code"}>Código de compra:</p>
              {idOrder && <b className={"checkout__card-order"}>{idOrder}</b>}
              <FcPaid className={"checkout__card-icon"} />
              <p className={"checkout__card-code"}>
                ¡Gracias por comprar en StoreTech!
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className={"checkout"}>
      <p className={"checkout__title"}>Ingresá tus datos</p>
      <Form>
        <InputGroup className="mb-3" controlId="formBasicEmail">
          <Form.Label className={"checkout__label"}>Nombre</Form.Label>
          <Form.Control
            onChange={handleInput}
            type="text"
            placeholder="Ingresá tu nombre"
            id="name"
          />
          <Form.Label className={"checkout__label"}>Correo</Form.Label>
          <Form.Control
            onChange={handleInput}
            type="email"
            placeholder="Correo@ejemplo.com"
            id="email"
          />
          <Form.Label className={"checkout__label"}>Telefono</Form.Label>
          <Form.Control
            onChange={handleInput}
            type="number"
            placeholder="Tu número sin el 0 y sin el 15"
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
        {!inputClear ? (
          <Button
            type="submit"
            className={"checkout__button"}
            onClick={handleBuy}
          >
            Procesar pago
          </Button>
        ) : (
          <Button type="submit" className={"checkout__button-opacity"}>
            Procesar pago
          </Button>
        )}
      </div>
    </div>
  );
};

export default Checkout;
