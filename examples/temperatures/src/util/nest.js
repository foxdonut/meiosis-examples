import _ from "lodash";

const nestUpdate = (update, path) => modelUpdate =>
  update(model => _.update(model, path, modelUpdate));

export const nest = (create, path, update) => {
  const component = create(nestUpdate(update, path));
  const result = {};
  if (component.model) {
    result.model = () => _.set({}, path, component.model());
  }
  if (component.view) {
    result.view = model => component.view(_.get(model, path));
  }
  return result;
};
