import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import ProductDetails from "./ProductDetails.js";
import Cart from "./Cart.js";
import './index.css'

function App() {
  const [cart, setCart] = useState([])

  function handleProductAdd(newProduct) {
    console.log("Adding product " + newProduct.id)
  }

  function handleProductDelete(id) {
    console.log("Deleting product " + id)
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete} />
          </Route>
          <Route path="/products/:id">
            <ProductDetails
              onProductAdd={handleProductAdd} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector("#react-root"));
