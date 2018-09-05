import O from "patchinko/constant"

import * as fp from "./fp"

export const nestPatch = (object, path) => ({
  [path[0]]: path.length === 1
    ? O(object)
    : O(nestPatch(object, path.slice(1)))
})

export const nestUpdate = (update, path) => patch =>
  update(nestPatch(patch, path))

export const nestCreateComponent = (create, update, path) => {
  const component = create(nestUpdate(update, path))
  const result = O({}, component)
  if (component.model) {
    result.model = () => nestPatch(component.model(), path)
  }
  if (component.view) {
    result.view = model => component.view(fp.path(path, model))
  }
  return result
}
