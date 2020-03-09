import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// improt 페이지 목록
import Exchange from "Pages/Exchange/Exchange";


function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Exchange} />
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default Routes;
