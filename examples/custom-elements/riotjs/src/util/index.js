const compose = (f, g) => x => f(g(x))

export const get = (object, path) =>
  path.reduce((obj, key) => (obj == undefined ? undefined : obj[key]), object)

const set = (object, rest, value, fn) => (rest.length > 0 ? fn(object, rest, value) : value)
const safeObject = object =>
  object != null && typeof object === "object" && !Array.isArray(object) ? object : {}

export const setMutate = (object, path, value) => {
  const first = path[0]
  const rest = path.slice(1)

  const target = safeObject(object)
  target[first] = set(target[first], rest, value, setMutate)

  return target
}

// This would be the place to transform { prop: val } into an FP or an Immer patch.
// Mergerino patches work without transformation.
const createNestPatch = path => patch => setMutate({}, path, patch)

export const nest = (path, local = { path: [] }) => {
  const nestedPath = local.path.concat(path)

  return {
    get: state => get(state, nestedPath),
    patch: createNestPatch(nestedPath),
    path: nestedPath
  }
}

/*
export const Nest = (states, update) => (path, local = { path: [] }) => {
  const nestedPath = local.path.concat(path)
  const nestPatch = createNestPatch(nestedPath)
  const nestUpdate = compose(update, nestPatch)

  const result = {
    state: get(states(), nestedPath)
    update: nestUpdate,
    path: nestedPath
  }

  states.map(state => {
    result.state = get(state, nestedPath)
  })

  return result
}
*/

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

/*
export const Nest = update => (state, path, local = { path: [] }) => {
  const nestedPath = local.path.concat(path)
  const nestPatch = createNestPatch(nestedPath)

  return {
    state: get(state, nestedPath),
    update: stateUpdate => update(nestPatch(stateUpdate)),
    path: nestedPath
  }
}
*/
