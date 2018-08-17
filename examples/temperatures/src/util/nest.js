import _ from "lodash";

const nestUpdate = (update, path) => func =>
  update(model => _.update(model, path, func));

export const nest = (create, update, path) => {
  const component = create(nestUpdate(update, path));
  const result = Object.assign({}, component);
  if (component.model) {
    result.model = () => _.set({}, path, component.model());
  }
  if (component.view) {
    result.view = model => component.view(_.merge(
      { errors: _.get(model, _.concat(["errors"], path)) },
      _.get(model, path)));
  }
  return result;
};
