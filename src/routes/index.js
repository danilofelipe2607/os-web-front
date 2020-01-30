import React from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../service/authService";
import DefaultLayout from ".././layout/defaultLayout";
import AuthLayout from ".././layout/adminLayout";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const PrivateRoutes = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const PublicRoutes = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

function Routes() {
  const token = useSelector(state => state.LoginReducer.token);
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <PrivateRoutes
            token={token}
            path={isAuthenticated() ? "/" : "/dashboard"}
            component={props => <DefaultLayout {...props} />}
          />
          <PublicRoutes
            token={token}
            path="/auth"
            component={props => <AuthLayout {...props} />}
          />
          <Redirect from="/" to="/auth/login" />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default Routes;
