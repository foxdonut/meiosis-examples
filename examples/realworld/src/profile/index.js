import { accept } from "./accept"
import { actions } from "./actions"
import { view } from "./view"
import { nextAction } from "./nextAction"
import { Articles } from "../articles"

export const Profile = {
  dependencies: { articles: Articles },
  accept,
  actions,
  view,
  nextAction
}
