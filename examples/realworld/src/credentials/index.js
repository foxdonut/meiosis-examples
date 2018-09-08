import { createActions } from "./actions"
import { createView } from "./view"

export const createCredentials = ({ navigator, update, options }) => ({
  view: createView({
    navigator,
    actions: createActions({ update, method: options.method }),
    options
  })
})
