import * as types from "../utils/actionTypes";

const initialState = {
  item: null
};

const ModalReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.INITIAL_STATE:
      return { ...state };
    default:
      return state;
  }
};

export default ModalReducer;
