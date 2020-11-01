const get = (object, path) =>
  path.reduce((obj, key) => (obj == undefined ? undefined : obj[key]), object)

const set = (object = {}, [first, ...rest], value) => {
  object[first] = rest.length ? set(object[first], rest, value) : value
  return object
}

const nestPatch = path => patch => set({}, path, patch)

export const nest = (path, local = { path: [] }) => {
  const nestedPath = local.path.concat(path)

  return {
    get: state => get(state, nestedPath),
    patch: nestPatch(nestedPath),
    path: nestedPath
  }
}
