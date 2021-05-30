import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Footer/Footer.component";
import HomePage from "./HomePage/HomePage.component";


const Routing = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/*
        <CheckAuthorization
            exact
            path="/dashboard"
            component={HomePage}
            auth={state.checkAuth}
        />
        <Route component={ErrorComponent} />
        */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
