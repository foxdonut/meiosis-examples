import _ from "lodash";

const nestUpdate = (update, path) => modelUpdate => {
  const fn = modelUpdate.fn;
  const nestedFn = fn ? model => _.update(model, path, fn) : null;

  update(_.merge(modelUpdate, {
    fn: nestedFn
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
      { context: _.get(model, "context") },
      _.get(model, path)));
  }
  return result;
};
