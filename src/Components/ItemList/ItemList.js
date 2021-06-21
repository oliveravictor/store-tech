import Item from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router";

const ItemList = ({ items }) => {
  const { categoryId } = useParams();

  if (categoryId === undefined) {
    return (
      <div>
        <p className={"itemList-title"}> Catalogo de productos</p>
        {items.map((item, id) => (
          <div key={id} className={"itemList-div"}>
            <Item item={item} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h2 className={"itemList-title"}>{categoryId}</h2>
        {items
          .filter((item) => item.category === categoryId)
          .map((item, id) => (
            <div key={id} className={"itemList-div"}>
              <Item item={item} />
            </div>
          ))}
      </div>
    );
  }
};

export default ItemList;
