import * as types from "../utils/actionTypes";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  name: null
};

const LoginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_SET_SUCESS:
      return { ...state, token: payload.token, name: payload.name };
    case types.LOGIN_SET_USER:
      return { ...state, user: payload };
    case types.LOGIN_SET_FAIL:
      return { ...state };
    case types.INITIAL_STATE:
      return { ...state };
    default:
      return state;
  }
};

export default LoginReducer;
