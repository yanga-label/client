import React, { useContext } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Context from "../Context/Context";
import HomePage from "./HomePage/HomePage.component";
// import CheckAuthorization from "./Utils/CheckAuthorization";


const Routing = () => {
  const { state } = useContext(Context);
  
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
    </BrowserRouter>
  );
};

export default Routing;
