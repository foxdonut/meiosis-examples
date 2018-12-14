import { accept } from "./accept"
import { actions } from "./actions"
import { view } from "./view"
import { onNavigate } from "./onNavigate"
import { Articles } from "../articles"

export const Profile = {
  dependencies: { articles: Articles },
  accept,
  actions,
  view,
  onNavigate
}
