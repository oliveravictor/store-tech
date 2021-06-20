import "./Item.css";
// import Products from "../../Assets/Data/Products.json";
import ItemCount from "../ItemCount/ItemCount";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, item, initial, stock }) => {
  const onAdd = () => {
    alert("¡Gracias por tu compra!");
  };

  return (
    <Link to={`/item/${id}`}>
      <div className={"item-div"} style={{ color: "black" }}>
        <Card className={"item-card"}>
          <Card.Body variant={"dark"}>
            <Card.Title className={"item-title"}>{item.type}</Card.Title>
            {/* <Card.Text className={"text-center"}>{item.model}</Card.Text> */}
            <Card.Img className={"item-img"} src={item.pictureUrl} />
            {/* <Card.Text className={"text-center"}> ${item.price}</Card.Text> */}
            {/* <ItemCount initial={0} stock={10} onClick={() => onAdd()} /> */}
            <Link to={`/item/${item.id}`}>
              <Button className={"btn btn-block"}>Ver Producto</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
};

export default Item;
