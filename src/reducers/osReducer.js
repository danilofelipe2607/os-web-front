import * as types from "../utils/actionTypes";

const INITIAL_STATE = {
  data: []
};

const OsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.INITIAL_STATE:
      return { ...state, data: [] };
    case types.GET_SUCESS:
      return { ...state, data: payload };
    case types.GET_FAIL:
      return { ...state };

    default:
      return state;
  }
};

export default OsReducer;
