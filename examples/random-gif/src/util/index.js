import { compose, lensProp, over } from "ramda";

export const nest = (update, path) => compose(update, over(lensProp(path)));
  // this is equivalent to:
  // modelChange => update(over(lensProp(path), modelChange));
  // or
  // modelChange => update(model => assoc(path, modelChange(prop(path, model)), model));
