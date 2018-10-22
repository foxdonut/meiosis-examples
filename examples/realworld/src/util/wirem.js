const getFn = (component, prop) => component[prop] || (() => null)

export const wireView = (component, update) => {
  const dependencies = {}
  const actions = getFn(component, "actions")(update)
  Object.keys(component.dependencies || {}).forEach(key => {
    dependencies[key] = wireView(component.dependencies[key], actions)
  })
  return getFn(component, "view")(Object.assign({ actions }, dependencies))
}

export const wirem = ({ component, data, update }) => {
  const model = component.model ? () => component.model(data) : () => null
  const view = wireView(component, update)
  const nextAction = component.nextAction ? component.nextAction(update) : () => null

  return Object.assign({}, component, { model, view, nextAction })
}
