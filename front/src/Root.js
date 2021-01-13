import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import axios from "axios";
import { setBooksAction, setCartItemsAction } from "./actions";
import MainTemplate from "./templates/MainTemplate/MainTemplate";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Order from "./views/Order/Order";
const Root = ({
  booksData,
  setBooks,
  selectedPage,
  cartItems,
  cartCounter,
  setCartItems,
}) => {
  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");

    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    if (selectedPage) {
      axios
        .get(`http://localhost:3001/api/book/?page${selectedPage}`)
        .then((response) => setBooks(response.data));
    }
  }, [selectedPage]);

  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/order" component={Order} />
        </Switch>
      </MainTemplate>
    </Router>
  );
};
const mapStateToProps = (state) => ({
  booksData: state.booksArray,
  selectedPage: state.selectedPage,
  cartItems: state.cartItems,
  cartCounter: state.cartCounter,
});
const mapDispatchToProps = (dispatch) => ({
  setBooks: (books) => dispatch(setBooksAction(books)),
  setCartItems: (items) => dispatch(setCartItemsAction(items)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Root);
