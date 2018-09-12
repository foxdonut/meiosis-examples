import O from "patchinko/constant"

import { get } from "./fp"

export const nestPatch = (object, path) => ({
  [path[0]]: path.length === 1
    ? O(object)
    : O(nestPatch(object, path.slice(1)))
})

export const nestUpdate = (update, path) => patch =>
  update(patch.context ? patch : nestPatch(patch, path))

export const nest = (create, path, options) => {
  const component = create(O(options, { update: nestUpdate(options.update, path) }))
  const result = O({}, component)
  if (component.model) {
    result.model = () => nestPatch(component.model(), path)
  }
  if (component.view) {
    result.view = model => component.view(O({ context: model.context }, get(model, path)))
  }
  return result
}
