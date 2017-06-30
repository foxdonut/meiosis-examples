import * as R from "ramda";

// this is equivalent to:
// modelChange => update(model => assocPath(path, modelChange(R.path(path, model)), model));
// or
// modelChange => update(R.over(R.lensPath(path), modelChange));
export const nest = (update, path) => {
  return R.compose(update, R.over(R.lensPath(path)));
};

export const nestComponent = (create, update, path) => {
  const view = create(nest(update, path));
  return R.compose(view, R.path(path));
};

export const Case = {
  cases: types => types.reduce((acc, next) => { acc[next] = next; return acc; }, {}),
  of: function(type) {
    const data = Array.prototype.slice.call(arguments, 1);
    return { type, data };
  },
  case: (handler, of) => of && of.type && handler[of.type] && handler[of.type].apply(null, of.data),
  is: (type, of) => of && of.type === type,
  data: of => of.data
};
