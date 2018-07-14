const R = require("ramda")

const nestUpdate = (update, path) => func =>
  update(R.over(R.lensPath(path), func))

const nestCreateComponent = (create, update, path) => {
  const component = create(nestUpdate(update, path))
  const result = Object.assign({}, component)
  if (component.model) {
    result.model = () => R.assocPath(path, component.model(), {})
  }
  if (component.state) {
    result.state = R.over(R.lensPath(path), component.state)
  }
  if (component.view) {
    result.view = R.compose(component.view, R.path(path))
  }
  return result
}

const nestComponent = (component, update, path) => {
  const result = Object.assign({}, component)

  if (component.model) {
    result.model = () => R.assocPath(path, component.model(), {})
  }
  if (component.view) {
    const nestedUpdate = nestUpdate(update, path)
    result.view = model => component.view(R.path(path, model), nestedUpdate)
  }
  return result
}

module.exports = { nestUpdate, nestCreateComponent, nestComponent }
