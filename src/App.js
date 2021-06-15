import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer />
      <Footer className={"mt-3"} />
    </div>
  );
}

export default App;
