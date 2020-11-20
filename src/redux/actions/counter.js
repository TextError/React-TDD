import { COUNTER } from "./types";


export const Increment = () => dispatch => dispatch({ type: COUNTER.INCREMENT });
export const Decrement = () => dispatch => dispatch({ type: COUNTER.DECREMENT });