import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Footer/Footer.component";
import Spinner from "./Spinner/Spinner.component";

const HomePage = lazy(() => import("./HomePage/HomePage.component"));
const About = lazy(() => import ("./About/About.component"));
const ShopPage = lazy(() => import ("./ShopPage/ShopPage.component"));
const Contact = lazy(() => import ("./Contact/Contact.component"));

const Routing = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Suspense>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
