import { lensProp, over } from "ramda";

export const nest = (update, path) =>
  modelChange => update(over(lensProp(path), modelChange));
  // this is equivalent to:
  // modelChange => update(model => assoc(path, modelChange(prop(path, model)), model));
