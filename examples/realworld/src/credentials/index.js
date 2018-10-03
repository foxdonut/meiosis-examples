import { actions } from "./actions"
import { view } from "./view"
import { Navigator } from "../navigator"

export const Credentials = options => ({
  dependencies: { navigator: Navigator },
  actions: actions(options),
  view: view(options)
})
