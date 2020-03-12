import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// improt 페이지 목록
import Exchange from "Pages/Exchange/Exchange";
import Login from "Pages/Login/Login";
import Signup from "Pages/Signup/Signup";
import Signupnext from "Pages/Signup/Signupnext";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Exchange} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signupnext" component={Signupnext} />
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default Routes;
