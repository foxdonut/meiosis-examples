const getFn = (component, prop) => component[prop] || (() => null)

export const wireView = (component, update, navigate) => {
  const dependencies = {}
  const actions = getFn(component, "actions")(update, navigate)
  Object.keys(component.dependencies || {}).forEach(key => {
    dependencies[key] = wireView(component.dependencies[key], update, navigate)
  })
  return getFn(component, "view")(Object.assign({ actions }, dependencies))
}

export const wirem = ({ component, update, navigate }) =>
  wireView(component, update, navigate)
