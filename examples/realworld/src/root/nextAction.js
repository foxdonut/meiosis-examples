import { HomePage } from "../util/constants"

export const nextAction = actions => (_state, update) => {
  if (update.pageId === HomePage) {
    actions.loadArticles()
  }
}
