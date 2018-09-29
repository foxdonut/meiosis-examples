const getFn = (component, prop) => component[prop] || (() => null)
const getModelKeys = dependency => dependency.model != null
  ? [dependency.model]
  : dependency.models || []

export const wireModel = (component, data, modelKeys = [], parentKey = "", model = {}) => {
  modelKeys.forEach(modelKey => {
    const result = getFn(component, "model")(data)
    if (result) {
      const key = parentKey + modelKey
      Object.assign(model, key.length > 0 ? { [key]: result } : result)
    }
  })
  ;(component.dependencies || []).forEach(dependency => {
    modelKeys.forEach(key =>
      wireModel(dependency.component, data, getModelKeys(dependency), parentKey + key, model)
    )
  })
  return model
}

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
  const model = wireModel(component, data, [""])
  const actions = wireActions(component, update)
  const view = wireView(component, actions)
  const state = component.state || (x => x)
  const nextAction = component.nextAction ? component.nextAction(actions) : () => null

  return {
    model: () => model,
    actions,
    view,
    state,
    nextAction
  }
}
