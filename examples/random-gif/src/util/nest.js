const R = require("ramda");

const nestUpdate = (update, path) => modelUpdate =>
  update(R.merge(modelUpdate, { fn: R.over(R.lensPath(path), modelUpdate.fn) }));

const nest = (create, path, update) => {
  const component = create(nestUpdate(update, path));
  const result = {};
  if (component.model) {
    result.model = () => R.assocPath(path, component.model(), {});
  }
  if (component.state) {
    result.state = R.over(R.lensPath(path), component.state);
  }
  if (component.view) {
    result.view = R.compose(component.view, R.path(path));
  }
  return result;
};

module.exports = { nestUpdate, nest };
