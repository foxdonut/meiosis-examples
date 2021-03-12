export const meiosis = ({ stream, merge, app }) => {
  const update = stream()

  const states = stream.scan((state, patch) => merge(state, patch), app.initial, update)

  const actions = app.Actions(update, states)

  const pathGet = (object, path) =>
    path.reduce((obj, key) => (obj == undefined ? undefined : obj[key]), object)

  const intoPath = (path, value) => ({
    [path[0]]: path.length === 1 ? value : intoPath(path.slice(1), value)
  })

  const contextCache = {}
  let root

  const nest = prop => {
    if (prop) {
      const path = [].concat(prop)
      if (!contextCache[path]) {
        const getState = () => pathGet(states(), path)
        const localUpdate = patch => update(intoPath(path, patch))
        const localActions = app.Actions(localUpdate)

        contextCache[path] = {
          getState,
          update: localUpdate,
          actions: localActions,
          nest: next => nest(path.concat(next)),
          root
        }
      }
      return contextCache[path]
    }
    return root
  }

  root = {
    getState: () => states(),
    update,
    actions,
    nest,
    root
  }

  return { states, root }
}
