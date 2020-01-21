import { applyMiddleware, createStore, compose } from "redux";
import multi from "redux-multi";
import promise from "redux-promise";
import thunk from "redux-thunk";
import reducers from "../reducers/index";

const middlewares = [thunk, multi, promise];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(...middlewares))
);
export default store;
