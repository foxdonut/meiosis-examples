import { compose, lensProp, prop, over } from "ramda";

export const nest = (update, path) => compose(update, over(lensProp(path)));
  // this is equivalent to:
  // modelChange => update(over(lensProp(path), modelChange));
  // or
  // modelChange => update(model => assoc(path, modelChange(prop(path, model)), model));

export const nestComponent = (create, update, path, events) => {
  const view = create(nest(update, path), events);
  return model => view(prop(path, model));
};