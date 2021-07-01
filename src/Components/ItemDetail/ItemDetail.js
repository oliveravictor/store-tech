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

  const onAdd = () => {
    setCounter(counter < detail.stock ? counter + 1 : counter);
  };

  const onSubtract = () => {
    setCounter(counter > initial ? counter - 1 : counter);
  };

  const addCart = () => {
    if (counter == 0) {
      alert("¡No agregaste productos a tu carrito!");
    } else {
      alert(
        `¡Agregaste ${counter} productos, quedan ${stockAvailable} en stock!`
      );
    }

    addItem(detail, counter);
    console.log(`Agregaste ${counter} unidades de ${detail.model}`);
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
            <div className="detail__itemcount__button">
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
              {counter >= 1 && (
                <Link to={"/cart"}>
                  <Button variant="dark" className={"detail__sales"}>
                    COMPRAR
                  </Button>
                </Link>
              )}

              {/* {counter >= 1 ? (
                <Link to={"/cart"}>
                  <Button variant="dark" className={"detail__sales"}>
                    COMPRAR
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="dark"
                  onClick={() => addCart()}
                  className={"detail__button"}
                >
                  🛒 Agregar productos
                </Button>
              )} */}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
