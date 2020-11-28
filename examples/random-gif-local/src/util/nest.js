const compose = (f, g) => x => f(g(x))

const get = (object, path) =>
  path.reduce((obj, key) => (obj == undefined ? undefined : obj[key]), object)

const set = (object = {}, [first, ...rest], value) => {
  object[first] = rest.length ? set(object[first], rest, value) : value
  return object
}

const createNestPatch = path => patch => set({}, path, patch)

export const nest = (path, local = { path: [] }) => {
  const nestedPath = local.path.concat(path)

  return {
    get: state => get(state, nestedPath),
    patch: createNestPatch(nestedPath),
    path: nestedPath
  }
}

export const Nest = update => (path, local = { path: [] }) => {
  const nestedPath = local.path.concat(path)
  const nestPatch = createNestPatch(nestedPath)
  const nestUpdate = compose(update, nestPatch)

  const result = {
    update: nestUpdate,
    path: nestedPath
  }

  return {
    get: state => {
      result.state = get(state, nestedPath)
      return result
    }
  }
}
