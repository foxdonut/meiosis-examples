import { createActions } from "./actions"
import { createView } from "./view"

export const createCredentials = (navigator, options) => update => ({
  view: createView(navigator, createActions(update, options.method), options)
})
