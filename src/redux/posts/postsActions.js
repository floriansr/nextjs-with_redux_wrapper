import { TICK, PAGE } from "./postsTypes";

export const Tick = (payload) => {
  return {
    type: TICK,
    payload,
  };
};

export const Page = (payload) => {
  return {
    type: PAGE,
    payload,
  };
};