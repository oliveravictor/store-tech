import ItemCount from "../ItemCount/ItemCount";
import { Button, Card } from "react-bootstrap";

const ItemDetail = ({ details }) => {
  return (
    <div>
      {details.map((detail, i) => (
        <div key={i}>
          <p>{detail.description}</p>
          <p>{detail.model}</p>
          <img src={detail.pictureUrl}></img>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
