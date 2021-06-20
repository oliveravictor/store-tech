import { Button, Card } from "react-bootstrap";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ details }) => {
  return (
    <>
      {details.map((detail) => (
        <div>
          <Card key={detail.id} className={"itemDetail-card"}>
            <Card.Body>
              <img className={"itemDetail-img"} src={detail.pictureUrl}></img>
              <p className={"itemDetail-title"}>{detail.model}</p>
              <p className={"itemDetail-description"}>{detail.description}</p>
              <Link to={"/cart"}>
                <Button className={"itemDetail-button"}>C O M P R A R</Button>
              </Link>
              <p className={"itemDetail-price"}>${detail.price}</p>
              <p
                style={{
                  width: "5rem",
                  fontSize: "1.4rem",
                  float: "right",
                }}
              >
                stock: {detail.stock}
              </p>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
