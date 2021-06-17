import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/item/:id" component={ItemDetailContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/" component={ItemListContainer} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
