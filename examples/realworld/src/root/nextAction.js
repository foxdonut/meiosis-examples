import { Home } from "../home"

export const nextAction = actions => (model, _update) => {
  if (model.pageId === Home.pageId && model.loading) {
    actions.loadArticles()
  }
}
