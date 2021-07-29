import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./Context/CartContex";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/store-tech" component={ItemListContainer} />
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route path="/category/:categoryId" component={ItemListContainer} />
          <Route exact path="/store-tech/cart" component={Cart} />
          <Route exact path="/" component={ItemListContainer} />
          <Route exact path="/store-tech/checkout" component={Checkout} />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
