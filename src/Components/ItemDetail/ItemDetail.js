import { Button, Card } from "react-bootstrap";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemDetail = ({ detail }) => {
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
    }
    // else {
    //   alert(
    //     `¡Gracias por tu compra de ${counter} productos, quedan ${stockAvailable} en stock!`
    //   );
    // }
  };

  return (
    <div>
      <Card className={"detail__card"}>
        <Card.Body>
          <img className={"detail__img"} src={detail.pictureUrl}></img>
          <p className={"detail__title"}>{detail.model}</p>
          <p className={"detail__description"}>{detail.description}</p>
          <p className={"detail__items"}>
            STOCK: {stockAvailable} - $
            {counter == 0 ? detail.price : updatedPrice}
          </p>
          <ItemCount
            value={counter}
            stock={detail.stock}
            onAdd={onAdd}
            onSubtract={onSubtract}
          />
          {counter >= 1 ? (
            <Link to={"/cart"}>
              <Button variant="dark" className={"detail__sales"}>
                C O M P R A R
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
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
