import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { useMemo } from "react";
import { initialState, rootReducer } from "../constants";

let store

const initStore = (preloadedState = initialState) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export const initializeStore = (preloadedState) => {
  console.log("initializeStore -> preloadedState", preloadedState)
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  // NO SSG
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  // console.log(typeof window) ===> object SSG;
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}


// import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
// import State from "./posts/postsReducer.ts";


// const makeStore: MakeStore<State> = (context: Context) => {
//   return createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
//   );
// };

// export const wrapper = createWrapper<State>(makeStore, { debug: true });

// /////