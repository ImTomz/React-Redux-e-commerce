import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import ListProducts from "./components/ListProducts.jsx";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ShowProduct from "./components/ShowProduct";

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
