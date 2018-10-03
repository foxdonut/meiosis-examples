import { actions } from "./actions"
import { view } from "./view"
import { Navigator } from "../navigator"

export const ArticleEdit = {
  dependencies: { navigator: Navigator },
  actions,
  view
}
