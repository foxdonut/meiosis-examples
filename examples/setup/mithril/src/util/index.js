import O from "patchinko/constant"

export const get = (object, path) =>
  path.reduce((obj, prop) => (obj == null ? null : obj[prop]), object)

export const pathPatch = path => patch => ({
  [path[0]]: path.slice(1).reduceRight((result, prop) => O({ [prop]: result }), O(patch))
})

export const lensProp = (context, prop) => lensPath(context, [prop])

export const lensPath = (context, lensPath) => {
  const path = context.path.concat(lensPath)
  const lens = pathPatch(path)

  return Object.assign({}, context, {
    state: get(context.root, path),
    path,
    lens
  })
}
