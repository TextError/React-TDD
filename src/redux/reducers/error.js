import { COUNTER } from "../actions/types";

const INITIAL_STATE = {
  error: ''
};

const error = (state = INITIAL_STATE, action ) => {
  const { payload } = action;
  switch (action.type) {
    case COUNTER.ERROR:
      return { ...state, error: payload };
    case COUNTER.CLEAR_ERROR:
      return { ...state, error: '' };
    default:
      return state;
  }
};

export default error;