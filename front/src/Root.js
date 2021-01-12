import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>
  );
};

export default Root;
