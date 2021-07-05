import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./Context/CartContex";
import { useState, useEffect } from "react";
import Load from "./Components/Loader/Load";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });

  return (
    <>
      {isLoading == true ? (
        <Load />
      ) : (
        <CartProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/item/:id" component={ItemDetailContainer} />
              <Route
                path="/category/:categoryId"
                component={ItemListContainer}
              />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/" component={ItemListContainer} />
              <Route path="*" component={ErrorPage} />
            </Switch>
            <Footer />
          </Router>
        </CartProvider>
      )}
    </>
  );
}

export default App;
