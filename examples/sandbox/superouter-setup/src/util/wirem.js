const getFn = (component, prop) => component[prop] || (() => null)

export const wireView = (component, update) => {
  const dependencies = {}
  const actions = getFn(component, "actions")(update)
  Object.keys(component.dependencies || {}).forEach(key => {
    dependencies[key] = wireView(component.dependencies[key], update)
  })
  return getFn(component, "view")(Object.assign({ actions }, dependencies))
}

const getDependencies = (component, dependencies = []) => {
  Object.values(component.dependencies || {}).forEach(dependency => {
    if (dependencies.indexOf(dependency) < 0) {
      dependencies.push(dependency)
    }
    getDependencies(dependency, dependencies)
  })
  return dependencies
}

export const wirem = ({ component, update, properties, combinators }) => {
  const view = wireView(component, update)
  const components = [component].concat(getDependencies(component))
  const aggregates = Object.keys(combinators || {}).reduce((result, key) => {
    result[key] = combinators[key](components.map(dependency => dependency[key]).filter(x => x))
    return result
  }, {})
  return Object.assign({}, properties, aggregates, { view })
}
