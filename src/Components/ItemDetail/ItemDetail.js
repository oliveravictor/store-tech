import ItemCount from "../ItemCount/ItemCount";
import { Button, Card } from "react-bootstrap";
import "./ItemDetail.css";

const ItemDetail = ({ details }) => {
  return (
    <div>
      {details.map((detail, i) => (
        <div>
          <Card key={i} className={"itemDetail-card"}>
            <Card.Body>
              <img className={"itemDetail-img"} src={detail.pictureUrl}></img>
              <p className={"itemDetail-title"}>{detail.model}</p>
              <p className={"itemDetail-description"}>{detail.description}</p>
              <Button className={"itemDetail-button"}>C O M P R A R</Button>
              <p className={"itemDetail-price"}>${detail.price}</p>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
