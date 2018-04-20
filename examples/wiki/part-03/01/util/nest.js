import _ from "lodash/fp";

const nestUpdate = (update, path) => func =>
  update(_.update(path, func));

export const nest = (create, update, path) => {
  const component = create(nestUpdate(update, path));
  const result = {};
  if (component.model) {
    result.model = () => _.set(path, component.model(), {});
  }
  if (component.view) {
    result.view = model => component.view(_.merge(
      { errors: _.get(model, _.concat(["errors"], path)) },
      _.get(path, model)));
  }
  return result;
};