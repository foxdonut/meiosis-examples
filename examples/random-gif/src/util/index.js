import { lensProp, over } from "ramda";

export const nest = (update, path) => update(over(lensProp(path)));
  // this is equivalent to:
  // modelChange => update(model => assoc(path, modelChange(prop(path, model)), model));
