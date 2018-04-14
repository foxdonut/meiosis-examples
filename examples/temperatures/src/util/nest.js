import _ from "lodash";

const nestUpdate = (update, path) => modelUpdate => {
  const fn = modelUpdate.fn;
  update(_.merge(modelUpdate, {
    fn: fn ? (model => _.update(model, path, fn)) : null
  }));
};

export const nest = (create, path, update) => {
  const component = create(nestUpdate(update, path));
  const result = {};
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
