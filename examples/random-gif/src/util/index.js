import O from "patchinko/constant"

export const get = (object, path) =>
  path.reduce((obj, prop) => (obj == null ? null : obj[prop]), object)

export const updatePath = (update, path) => patch =>
  update({
    [path[0]]: path.slice(1).reduceRight((result, key) => O({ [key]: result }), patch)
  })

export const lens = ({ state, update }, path) => ({
  state: get(state, path),
  update: updatePath(update, path)
})
