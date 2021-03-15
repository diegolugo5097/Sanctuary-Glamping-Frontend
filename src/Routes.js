import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Glampings from "./pages/Glampings/Glampings";
import Gallery from "./pages/Gallery/Gallery";
import FormAbout from "./pages/Admin/DashboardAbout/index";
import FormCarousel from "./pages/Admin/DashboardCarousel/index";
import FormGallery from "./pages/Admin/DashboardGallery/index";
import FormGlamping from "./pages/Admin/DashboardGlamping/index";
import FormUser from "./pages/Admin/DashboardUsers/index";
import SignIn from "./pages/Auth/Signin";
import AdminRoute from "./AdminRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="/glampings" exact component={Glampings} />
        <Route path="/gallery" exact component={Gallery} />
        <AdminRoute path="/admin/aboutUs" exact component={FormAbout} />
        <AdminRoute path="/admin/carousel" exact component={FormCarousel} />
        <AdminRoute path="/admin/galleries" exact component={FormGallery} />
        <AdminRoute path="/admin/glamping" exact component={FormGlamping} />
        <AdminRoute path="/admin/user" exact component={FormUser} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
