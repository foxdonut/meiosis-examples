export const meiosis = ({ stream, merge, app }) => {
  const update = stream()

  const states = stream.scan((state, patch) => merge(state, patch), app.initial, update)

  const pathGet = (object, path) =>
    path.reduce((obj, key) => (obj == undefined ? undefined : obj[key]), object)

  const intoPath = (path, value) => ({
    [path[0]]: path.length === 1 ? value : intoPath(path.slice(1), value)
  })

  const contextCache = {}

  const root = {
    getState: () => states(),
    update
  }

  const actions = app.Actions(root)
  root.actions = actions

  const nest = prop => {
    if (prop) {
      const path = [].concat(prop)
      if (!contextCache[path]) {
        const getState = () => pathGet(states(), path)
        const localUpdate = patch => update(intoPath(path, patch))

        const localContext = {
          getState,
          update: localUpdate,
          nest: next => nest(path.concat(next)),
          root
        }
        const localActions = app.Actions(localContext)
        localContext.actions = localActions
        contextCache[path] = localContext
      }
      return contextCache[path]
    }
    return root
  }

  root.nest = nest

  return { states, root }
}
