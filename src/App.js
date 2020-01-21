import React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import store from "./store";
import { BrowserRouter, Router } from "react-router-dom";
import Routes from "./routes";

export default function App() {
  const hist = createBrowserHistory();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router history={hist}>
          <Routes />
        </Router>
      </BrowserRouter>
    </Provider>
  );
}
