import * as R from "ramda";
import * as L from "partial.lenses";

const nestUpdate = (update, path) => func =>
  update(L.modify(path, func));

export const nest = (create, update, path) => {
  const component = create(nestUpdate(update, path));
  const result = {};
  if (component.model) {
    result.model = () => L.set(path, component.model(), {});
  }
  if (component.view) {
    result.view = model => component.view(R.merge(
      { errors: L.get(R.concat(["errors"], path), model) },
      L.get(path, model)));
  }
  return result;
};