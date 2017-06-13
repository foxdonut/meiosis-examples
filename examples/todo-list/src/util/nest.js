import { compose, over, lensProp, path as Rpath } from "ramda";

export const nest = (update, path) =>
  modelChange => update(over(lensProp(path), modelChange));

export const nestComponent = (create, update, path) =>
  compose(create(nest(update, path)), Rpath(path));
