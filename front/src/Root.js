import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { store } from "../store";
const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
