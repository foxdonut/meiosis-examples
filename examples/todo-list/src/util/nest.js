import * as R from "ramda";

const nestUpdate = (update, path) => func =>
  update(R.over(R.lensPath(path), func));

export const nest = (create, update, path) => {
  const component = create(nestUpdate(update, path));
  const result = {};
  if (component.model) {
    result.model = () => R.assocPath(path, component.model(), {});
  }
  if (component.view) {
    result.view = model => component.view(R.merge(
      { errors: R.path(R.concat(["errors"], path), model) },
      R.path(path, model)));
  }
  return result;
};
