import { actions } from "./actions"
import { view } from "./view"
import { Navigator } from "../navigator"

export const Settings = {
  dependencies: { navigator: Navigator },
  actions,
  view
}
