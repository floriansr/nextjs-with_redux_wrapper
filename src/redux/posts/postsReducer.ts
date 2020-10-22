import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { initialState } from "../../constants"

export interface State {
  time: string;
  light: string;
}

export const projectsReducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case "TICK":
      return {
        ...state,
        time: action.payload,
      };
    case "PAGE":
      return {
        ...state,
        light: action.payload,
      };
    default:
      return state;
  }
};