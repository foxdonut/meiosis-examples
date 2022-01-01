import flyd from "flyd"
import merge from "mergerino"

export const setupCell = app => {
  const update = flyd.stream()
  const getState = flyd.scan(merge, app.Initial(), update)

  const root = {
    getState,
    update
  }

  const actions = app.Actions(root)

  root.actions = actions
  root.root = root

  return root
}

const nestPatch = (patch, prop) => ({ [prop]: patch })

export const nest = (cell, prop, Actions) => {
  const getState = cell.getState.map(state => state[prop])

  const nested = {
    getState,
    update: patch => cell.update(nestPatch(patch, prop)),
    actions: null,
    root: cell.root
  }

  if (Actions) {
    nested.actions = Actions(nested)
  }

  return nested
}
