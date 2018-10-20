import { HomePage, ArticleDetailPage, ProfilePage } from "../util/router"

// FIXME: compose nextAction into components
export const nextAction = actions => (_state, patch) => {
  if (patch.pageId === HomePage) {
    //FIXME: better handling of filter params
    actions.loadArticles({ tag: patch.params.tag, offset: patch.params.offset })
  }
  else if (patch.pageId === ArticleDetailPage) {
    actions.loadArticle(patch.params)
  }
  else if (patch.pageId === ProfilePage) {
    actions.loadProfile(patch.params)
  }
}
