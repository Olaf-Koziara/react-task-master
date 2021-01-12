import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { store } from "./store";
import axios from "axios";
import { setBooksAction } from "./actions";
import MainTemplate from "../templates/MainTemplate/MainTemplate";
const Root = ({ books, setBooks }) => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/book")
      .then((response) => setBooks(response.data));
  }, []);

  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route path="/" exact />
        </Switch>
      </MainTemplate>
    </Router>
  );
};
const mapStateToProps = (state) => ({
  books: state.booksArray,
});
const mapDispatchToProps = (dispatch) => ({
  setBooks: (books) => dispatch(setBooksAction(books)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Root);
