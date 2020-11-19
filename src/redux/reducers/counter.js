import { COUNTER } from "../actions/types";

export const INITIAL_STATE = {
  counter: 0
};

const counter = (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case COUNTER.INCREMENT:
      return { ...state, counter: state.counter + 1};
    case COUNTER.DECREMENT:
      return { ...state, counter: state.counter - 1};
    default:
      return state;
  }
};

export default counter;