const get = (object, path) =>
  path.reduce((obj, key) => (obj == undefined ? undefined : obj[key]), object)

const setInPlace = (object = {}, [first, ...rest], value) => {
  object[first] = rest.length ? setInPlace(object[first], rest, value) : value
  return object
}

const nestPatch = path => patch => setInPlace({}, path, patch)

export const nestState = (state, path) => ({
  state: get(state, path),
  get: state => get(state, path),
  patch: nestPatch(path),
  path
})

export const nestLocal = (local, path) => {
  const nestedPath = local.path.concat(path)
  return {
    state: get(local.state, path),
    get: state => get(state, nestedPath),
    patch: nestPatch(nestedPath),
    path: nestedPath
  }
}
