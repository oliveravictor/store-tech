import Products from "../../Assets/Data/Products.json";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
// import ItemDetail from "../ItemDetail/ItemDetail";

import { Card } from "react-bootstrap";

const Item = ({ item, initial, stock }) => {
  const onAdd = () => {
    alert("¡Gracias por tu compra!");
  };

  return (
    <div className={"item-div"}>
      <Card className={"item-card"}>
        <Card.Body variant={"dark"}>
          <Card.Title className={"item-title"}>{item.type}</Card.Title>
          {/* <Card.Text className={"text-center"}>{item.model}</Card.Text>
          <Card.Text className={"text-center"}> ${item.price}</Card.Text> */}
          <Card.Img className={"item-img"} src={item.pictureUrl} />
          <ItemCount initial={0} stock={10} onClick={() => onAdd()} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
