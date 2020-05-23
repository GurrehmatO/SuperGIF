import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
      </Switch>
    </Router>
  );
};

export default Routes;
