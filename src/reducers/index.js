import { combineReducers } from "redux";
import LoginReducer from "./loginReducers";
import OsReducer from "./osReducer";
const rootReducer = combineReducers({
  LoginReducer,
  OsReducer
});

export default rootReducer;
