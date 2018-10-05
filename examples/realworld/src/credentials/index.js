import { actions } from "./actions"
import { view } from "./view"

export const Credentials = options => ({
  actions: actions(options),
  view: view(options)
})
