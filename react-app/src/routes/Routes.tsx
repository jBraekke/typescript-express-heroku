import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AboutUsPage from "../pages/aboutUs/AboutUsPage";
import AddApartmentPage from "../pages/addApartment/AddApartmentPage";
import ApartmentPage from "../pages/availableApartments/ApartmentPage";
import ContactUsPage from "../pages/contact/ContactUsPage";
import FrontpagePage from "../pages/home/HomePage";
import SignInPage from "../pages/signin/SignInPage";
import SignUpPage from "../pages/signup/SignUpPage";


const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <FrontpagePage />
        </Route>
        <Route exact path="/welcome">
          <ApartmentPage />
        </Route>
        <Route exact path="/contact">
          <ContactUsPage />
        </Route>
        <Route exact path="/login/signin">
          <SignInPage />
        </Route>
        <Route exact path="/login/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/addApartment">
          <AddApartmentPage />
        </Route>
        <Route exact path="/aboutus">
          <AboutUsPage />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
