const R = require("ramda");

const nestUpdate = (update, path) => modelUpdate =>
  update({ id: modelUpdate.id, fn: R.over(R.lensPath(path), modelUpdate.fn) });

const nest = (create, path, update) => {
  const component = create(nestUpdate(update, path));
  const result = {};
  if (component.model) {
    result.model = () => R.assocPath(path, component.model(), {});
  }
  if (component.view) {
    result.view = R.compose(component.view, R.path(path));
  }
  return result;
};

module.exports = { nestUpdate, nest };
