import React from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Products from "./component/Products";
import ProductDetails from "./component/ProductDetails";
import 'font-awesome/css/font-awesome.min.css'
import Cart from "./component/Cart";
import { Route, Switch, Redirect } from "react-router-dom";
import Checkout from "./component/Checkout";

export const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Products/:id" component={ProductDetails} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Checkout" component={Checkout} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </>
  );
};

export default App;
