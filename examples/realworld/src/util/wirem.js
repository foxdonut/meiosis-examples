const getFn = (component, prop) => component[prop] || (() => null)

export const wireActions = (component, update, actions = {}) => {
  Object.assign(actions, getFn(component, "actions")({ update, actions }))
  Object.keys(component.dependencies || {}).forEach(key => {
    wireActions(component.dependencies[key], update, actions)
  })
  return actions
}

export const wireView = (component, actions) => {
  const dependencies = {}
  Object.keys(component.dependencies || {}).forEach(key => {
    dependencies[key] = wireView(component.dependencies[key], actions)
  })
  return getFn(component, "view")(Object.assign({ actions }, dependencies))
}

export const wirem = ({ component, data, update }) => {
  const model = component.model ? () => component.model(data) : () => null
  const actions = wireActions(component, update)
  const view = wireView(component, actions)
  const nextAction = component.nextAction ? component.nextAction(actions) : () => null

  return Object.assign({}, component, { model, actions, view, nextAction })
}
