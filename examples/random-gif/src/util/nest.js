const R = require("ramda");

const nestUpdate = (update, path) => func =>
  update(R.over(R.lensPath(path), func));

const nest = (create, update, path) => {
  const component = create(nestUpdate(update, path));
  const result = Object.assign({}, component);
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
