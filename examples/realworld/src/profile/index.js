import { view } from "./view"
import { actions } from "./actions"
import { nextAction } from "./nextAction"
import { Articles } from "../articles"

export const Profile = {
  dependencies: { articles: Articles },
  view,
  actions,
  nextAction
}
