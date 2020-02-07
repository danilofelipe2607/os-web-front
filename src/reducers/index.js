import { combineReducers } from "redux";
import LoginReducer from "./loginReducers";
import OsReducer from "./osReducer";
import ModalReducer from "./modalReducer";
const rootReducer = combineReducers({
  LoginReducer,
  OsReducer,
  ModalReducer
});

export default rootReducer;
