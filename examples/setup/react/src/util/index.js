import _ from "lodash"

export const patchProp = (patch, prop) => state => _.update(state, prop, patch)

export const updateProp = (update, prop) => patch => update(patchProp(patch, prop))

export const lensProp = ({ state, update }, prop) => ({
  state: state[prop],
  update: updateProp(update, prop)
})

export const patchPath = (patch, path) => state => _.update(state, path, patch)

export const updatePath = (update, path) => patch => update(patchPath(patch, path))

export const lensPath = ({ state, update }, path) => ({
  state: _.get(state, path),
  update: updatePath(update, path)
})
