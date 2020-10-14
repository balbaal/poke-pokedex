import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "configs/context";

// Pages
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default GlobalProvider(Routing);
