import { HomePage, ArticleDetailPage, ProfilePage } from "../util/router"

// FIXME: compose nextAction into components
export const nextAction = actions => (_state, patch) => {
  if (patch.pageId === HomePage) {
    actions.loadArticles({ tag: patch.params.tag })
  }
  else if (patch.pageId === ArticleDetailPage) {
    actions.loadArticle(patch.params)
  }
  else if (patch.pageId === ProfilePage) {
    actions.loadProfile(patch.params)
  }
}
