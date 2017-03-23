import { over, lensProp } from "ramda";

export const nest = (update, path) =>
  modelChange => update(over(lensProp(path), modelChange));