import Footer from "./Components/Footer/Footer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const onAdd = () => {
    console.log("Gracias por tu compra!");
  };

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos a Store Tech!" />
      <ItemCount initial={0} stock={10} onAdd={onAdd} />
      <Footer className={"mt-3"} />
    </>
  );
}

export default App;
