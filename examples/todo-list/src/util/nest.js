import * as R from "ramda";

const nestUpdate = (update, path) => func =>
  update(R.over(R.lensPath(path), func));

export const nest = (create, update, path) => {
  const component = create(nestUpdate(update, path));
  return R.applyTo(component,
    R.pipe(
      R.merge({}),
      R.when(R.has("model"), R.assoc("model", () => R.assocPath(path, component.model(), {}))),
      R.when(R.has("view"), R.assoc("view", R.compose(component.view, R.path(path))))
    )
  );
};
