import * as types from "../utils/actionTypes";

const initialState = {
  data: [{}]
};

const OsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("pas", payload, type);
  switch (type) {
    case types.GET_SUCESS:
      return { ...state, data: payload };
    case types.GET_FAIL:
      return { ...state };
    case types.INITIAL_STATE:
      return { ...state };
    default:
      return state;
  }
};

export default OsReducer;
