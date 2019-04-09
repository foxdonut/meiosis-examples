import O from "patchinko/constant"

export const get = (object, path) =>
  path.reduce((obj, prop) => (obj == null ? null : obj[prop]), object)

export const lensProp = ({ state, lens }, prop) => ({
  state: state[prop],
  lens: patch => (lens || (x => x))({ [prop]: O(patch) })
})

/*
export const patchPath = (patch, path) => ({
  [path[0]]: path.slice(1).reduceRight((result, prop) => O({ [prop]: result }), patch)
})

export const updatePath = (update, path) => patch => update(patchPath(patch, path))

export const lensPath = ({ state, update }, path) => ({
  state: get(state, path),
  update: updatePath(update, path)
})
*/
