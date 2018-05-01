import _ from "lodash";
import { O } from "./overloaded";

const nestPatch = (object, path) => ({
  [path[0]]: path.length === 1
    ? O(object)
    : O(nestPatch(object, path.slice(1)))
});

const nestUpdate = (update, path) => patch =>
  update(nestPatch(patch, path));

export const nest = (create, update, path) => {
  const component = create(nestUpdate(update, path));
  const result = O({}, component);
  if (component.model) {
    result.model = () => nestPatch(component.model(), path);
  }
  if (component.view) {
    result.view = model => component.view(_.merge(
      { errors: _.get(model, _.concat(["errors"], path)) },
      _.get(model, path)));
  }
  return result;
};
