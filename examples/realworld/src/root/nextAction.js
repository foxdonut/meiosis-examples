import { HomePage } from "../util/router"

export const nextAction = actions => (_state, patch) => {
  if (patch.pageId === HomePage) {
    actions.loadArticles()
  }
}
