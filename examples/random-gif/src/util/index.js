import * as R from "ramda";

// convenience function, like partial.lenses L.modify
export const modify = R.curry((path, fn) => (typeof path === "string") ?
  R.over(R.lensProp(path), fn) : R.over(R.lensPath(path), fn));

// this is equivalent to:
// modelChange => update(over(lensProp(path), modelChange));
// or
// modelChange => update(model => assoc(path, modelChange(prop(path, model)), model));
export const nest = (update, path) => {
  return R.compose(update, modify(path));
};

export const nestComponent = (create, update, path, events) => {
  const view = create(nest(update, path), events);
  const fn = (typeof path === "string") ? R.prop : R.path;
  return R.compose(view, fn(path));
};
