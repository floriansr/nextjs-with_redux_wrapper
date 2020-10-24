import { AnyAction } from "redux";
import { initialState } from "../../constants"
import { TICK } from "./tickTypes";

export interface State {
  state: {
    lastUpdate: number;
    light: boolean;
  }
}

export const tick = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light,
      })
    default:
      return state;
  }
};