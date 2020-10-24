import { tick } from "../redux/tick/tickReducer.ts";
import { combineReducers } from "redux";

export const initialState = {
  state: {
    lastUpdate: 0,
    light: false,
  }
};

export const rootReducer = combineReducers({
  tick,
});