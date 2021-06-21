import { Button, Card } from "react-bootstrap";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ItemDetail = ({ details }) => {
  const { id: itemId } = useParams();

  return (
    <>
      {details
        .filter((detail) => detail.id === parseInt(itemId))
        .map((detail) => (
          <div key={detail.id}>
            <Card className={"itemDetail-card"}>
              <Card.Body>
                <img className={"itemDetail-img"} src={detail.pictureUrl}></img>
                <p className={"itemDetail-title"}>{detail.model}</p>
                <p className={"itemDetail-description"}>{detail.description}</p>
                <Link to={"/cart"}>
                  <Button className={"itemDetail-button"}>C O M P R A R</Button>
                </Link>
                <p className={"itemDetail-price ml-2"}>${detail.price}</p>
                <p
                  style={{
                    width: "5rem",
                    fontSize: "1.2rem",
                    float: "right",
                  }}
                >
                  STOCK: {detail.stock}
                </p>
              </Card.Body>
            </Card>
          </div>
        ))}
    </>
  );
};

export default ItemDetail;
