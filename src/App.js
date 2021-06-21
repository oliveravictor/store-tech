import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/item/:id" component={ItemDetailContainer} />
        <Route
          exact
          path="/category/:categoryId"
          component={ItemListContainer}
        />
        <Route exact path="/" component={ItemListContainer} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
