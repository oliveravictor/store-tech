import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Una prop de ItemListcontainer" />
    </>
  );
}

export default App;
