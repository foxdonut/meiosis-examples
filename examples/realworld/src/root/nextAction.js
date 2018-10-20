import { HomePage, ArticleDetailPage } from "../util/router"

// FIXME: compose nextAction into components
export const nextAction = actions => (_state, patch) => {
  if (patch.pageId === HomePage) {
    actions.loadArticles()
  }
  else if (patch.pageId === ArticleDetailPage) {
    actions.loadArticle(patch.params)
  }
}
