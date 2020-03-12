import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Main from "Pages/Main/Main";
import Depth from "Pages/Exchange/Depth";
import Exchange from "Pages/Exchange/Exchange";
// improt 페이지 목록

import Login from "Pages/Login/Login";
import Signup from "Pages/Signup/Signup";
import Signupnext from "Pages/Signup/Signupnext";
import Index from "Pages/Exchange/Index";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Main" component={Main} />
        <Route exact path="/Depth" component={Depth} />
        <Route exact path="/" component={Exchange} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signupnext" component={Signupnext} />
        <Route exact path="/exchange" component={Index} />
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default Routes;
