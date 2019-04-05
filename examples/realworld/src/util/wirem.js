const getFn = (component, prop) => component[prop] || (() => null)

export const wireView = (component, update, navigate) => {
  const dependencies = {}
  const actions = getFn(component, "actions")({ update, navigate })
  Object.keys(component.dependencies || {}).forEach(key => {
    dependencies[key] = wireView(component.dependencies[key], update, navigate)
  })
  return getFn(component, "view")(Object.assign({ actions }, dependencies))
}

export const wirem = ({ component, update, navigate }) => wireView(component, update, navigate)

const extractProperties = (component, properties) => {
  Object.keys(properties).forEach(prop => {
    if (component[prop]) {
      properties[prop].push(component[prop])
    }
  })
  Object.keys(component.dependencies || {}).forEach(key =>
    extractProperties(component.dependencies[key], properties)
  )
  return properties
}

export const findProperties = (component, properties) =>
  extractProperties(
    component,
    properties.reduce((result, prop) => {
      result[prop] = []
      return result
    }, {})
  )
