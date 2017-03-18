import { lensProp, mergeWith, over } from "ramda";

export const nest = (update, path) =>
  modelChange => update(over(lensProp(path), modelChange));
  // this is equivalent to:
  // modelChange => update(model => assoc(path, modelChange(prop(path, model)), model));

const merger = (fn1, fn2) => arg => {
  fn1(arg);
  fn2(arg);
};

export const mergeEvents = (events1, events2) => mergeWith(merger, events1, events2);
