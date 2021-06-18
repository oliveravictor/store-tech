import ItemCount from "../ItemCount/ItemCount";
import { Button, Card } from "react-bootstrap";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ details }) => {
  return (
    <Link to="/item/:id" style={{ color: "black" }}>
      <div>
        {details.map((detail) => (
          <div>
            <Card key={detail.id} className={"itemDetail-card"}>
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
    </Link>
  );
};

export default ItemDetail;
