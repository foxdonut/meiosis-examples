const compose = (f, g) => x => f(g(x))

const get = (object, path) =>
  path.reduce((obj, key) => (obj == undefined ? undefined : obj[key]), object)

const set = (object = {}, [first, ...rest], value) => {
  object[first] = rest.length ? set(object[first], rest, value) : value
  return object
}

const createNestPatch = path => patch => set({}, path, patch)

const nest = (update, path, Actions = () => null, parentPath = []) => {
  const nestedPath = parentPath.concat(path)
  const nestPatch = createNestPatch(nestedPath)
  const nestUpdate = compose(update, nestPatch)

  const result = {
    update: nestUpdate,
    actions: Actions(nestUpdate),
    nest: path => nest(update, path, Actions, nestedPath)
  }

  return {
    get: state => {
      result.state = get(state, nestedPath)
      return result
    }
  }
}

export const Nest = update => (path, Actions) => nest(update, path, Actions)
