import { projectsReducer } from "../redux/posts/postsReducer.ts";
import { combineReducers } from "redux";

export const initialState = {
  state: {
    time: 0,
    light: "init"
  }
};

export const rootReducer = combineReducers({
  state: projectsReducer,
});