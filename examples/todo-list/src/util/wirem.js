const getFn = (component, prop) => component[prop] || (() => null)

export const wireActions = (component, update, actions = {}) => {
  Object.assign(actions, getFn(component, "actions")(update, actions))
  ;(component.dependencies || []).forEach(dependency => {
    wireActions(dependency.component, update, actions)
  })
  return actions
}

export const wireView = (component, actions) => {
  const dependencies = {}
  ;(component.dependencies || []).forEach(dependency => {
    dependencies[dependency.key] = wireView(dependency.component, actions)
  })
  return getFn(component, "view")(Object.assign({ actions }, dependencies))
}

export const wirem = ({ component, data, update }) => {
  const model = component.model ? () => component.model(data) : () => null
  const actions = wireActions(component, update)
  const view = wireView(component, actions)
  const state = component.state || (x => x)
  const nextAction = component.nextAction ? component.nextAction(actions) : () => null

  return { model, actions, view, state, nextAction }
}
