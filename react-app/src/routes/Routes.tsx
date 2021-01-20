import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
//import TestLayout from "../layouts/TestLayout";
import FrontpagePage from "../pages/frontpage/FrontpagePage";
import SignInPage from "../pages/signin/SignInPage";
import SignUpPage from "../pages/signup/SignUpPage";
import WelcomePage from "../pages/welcome/WelcomePage";

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <FrontpagePage />
        </Route>
        <Route exact path="/welcome">
          <WelcomePage />
        </Route>
        <Route exact path="/login/signin">
          <SignInPage />
        </Route>
        <Route exact path="/login/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
