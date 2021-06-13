import motog8 from "../../Assets/Images/motog8.jpg";
import ItemCount from "../ItemCount/ItemCount";

import { Card } from "react-bootstrap";

const Item = ({ item, initial, stock }) => {
  const onAdd = () => {
    alert("¡Gracias por tu compra!");
  };

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Body variant={"dark"}>
        <Card.Title>
          <h4 className={"text-center"}>{item.type}</h4>
        </Card.Title>
        <Card.Text className={"text-center"}>{item.description}</Card.Text>
        <Card.Text className={"text-center"}> ${item.price}</Card.Text>
        <Card.Img variant="top" src={motog8} />
        {/* <Card.Img variant="top" src={item.pictureUrl} /> */}
        <ItemCount initial={0} stock={10} onClick={() => onAdd()} />
      </Card.Body>
    </Card>
  );
};

export default Item;

{
  /* <Card.Img variant="top" src={motog8} /> */
}
