import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ListProducts from "./components/ListProducts/ListProducts";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import ShowProduct from "./components/ShowProducts/ShowProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ListProducts} />
          <Route path="/cart" component={Cart} />
          <Route path="/products/product" component={ShowProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
