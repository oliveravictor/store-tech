import { Button, Card } from "react-bootstrap";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContex";

const ItemDetail = ({ detail }) => {
  const { addItem } = useContext(CartContext);

  const initial = 0;
  const [counter, setCounter] = useState(initial);
  const stockAvailable = detail.stock - counter;
  const updatedPrice = detail.price * counter;
  const [sales, setSales] = useState(true);
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    setCounter(counter < detail.stock ? counter + 1 : counter);
  };

  const onSubtract = () => {
    setCounter(counter > initial ? counter - 1 : counter);
  };

  const payment = () => {
    if (sales) {
      return (
        <div>
          <ItemCount
            value={counter}
            stock={detail.stock}
            onAdd={onAdd}
            onSubtract={onSubtract}
          />

          <Button
            variant="dark"
            onClick={() => addCart()}
            className={"detail__button"}
          >
            🛒 Agregar productos
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          {added && (
            <p className="detail__added">
              Agregaste <span className={"detail__counter"}> {counter}</span>
              {detail.type} a tu carrito
            </p>
          )}
          <Link to={"/cart"}>
            <Button variant="dark" className={"detail__sales"}>
              COMPRAR
            </Button>
          </Link>
        </div>
      );
    }
  };

  const addCart = () => {
    if (counter == 0) {
      alert("¡No agregaste productos a tu carrito!");
    } else {
      alert(
        `¡Agregaste ${counter} productos, quedan ${stockAvailable} en stock!`
      );
      setAdded(true);
      setSales(false);
    }
    addItem(detail, counter);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Card className={"detail__card"}>
        <Card.Body className={"card-body"}>
          <img className={"detail__img"} src={detail.pictureUrl}></img>
          <div className={"detail__text"}>
            <p className={"detail__title"}>{detail.model}</p>
            <p className={"detail__description"}>{detail.description}</p>
            <p className={"detail__items"}>
              STOCK: {stockAvailable} - $
              {counter == 0 ? detail.price : updatedPrice}
            </p>
            <div className="detail__itemcount__button">{payment()}</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
