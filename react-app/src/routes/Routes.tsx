import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AboutUsPage from "../pages/about/AboutUsPage";
import AddApartmentPage from "../pages/addApartment/AddApartmentPage";
import ApartmentPage from "../pages/availableApartments/ApartmentPage";
import ContactUsPage from "../pages/contact/ContactUsPage";
import FrontpagePage from "../pages/home/HomePage";
import PdfPage from "../pages/pdf/PdfPage";
import SignInPage from "../pages/signin/SignInPage";
import SignUpPage from "../pages/signup/SignUpPage";
import ApartmentViewPage from "../pages/apartmentView/ApartmentViewPage";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/login/LoginPage";

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
        <Route exact path="/apartmentview/:id">
          <ApartmentViewPage />
        </Route>

        <Route exact path="/contact/">
          <ContactUsPage />
        </Route> 

        <Route exact path="/contact/:city/:address">
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

        <Route exact path="/pdf">
          <PdfPage />
        </Route>

        <Route exact path="/createuser">
          <RegisterPage />
        </Route>

        <Route exact path="/loginuser">
          <LoginPage />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
