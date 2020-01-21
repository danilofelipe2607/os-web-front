import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Button } from "primereact/button";
import logo from "../../assets/img/logo.png";
import { Routes } from "../../routes/routes";

import "./style.css";
export default function AdminLayout() {
  function getRoutes(routes) {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    });
  }
  return (
    <div className="container">
      <Switch>
        {getRoutes(Routes)}
        <Redirect from="/auth" to="/auth/login" />
      </Switch>
    </div>
  );
}
