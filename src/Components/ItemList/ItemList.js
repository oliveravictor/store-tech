import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <>
      <h2 className={"itemList-title"}>Productos</h2>
      {items.map((item) => (
        <div className={"itemList-div mb-5"}>
          <Item key={item.id} item={item} id={item.id} />
        </div>
      ))}
    </>
  );
};

export default ItemList;
