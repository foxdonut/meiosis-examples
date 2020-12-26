import { articlesApi, loadArticleAndComments, loadArticlesAndTags } from "../services"
import { Route, routeTo } from "../router"
import { getArticlesFilter } from "../util/filter"
import { selectors } from "../selectors"

const refresh = (state, slug) =>
  selectors.page(state) === Route.ArticleDetail
    ? loadArticleAndComments({ slug })
    : loadArticlesAndTags(getArticlesFilter(state))

export const Actions = update => ({
  favoriteArticle: (state, slug) => {
    if (state.user) {
      articlesApi
        .favorite(slug)
        .then(() => refresh(state, slug))
        .then(update)
    } else {
      update(routeTo(Route.Login))
    }
  },

  unfavoriteArticle: (state, slug) => {
    if (state.user) {
      articlesApi
        .unfavorite(slug)
        .then(() => refresh(state, slug))
        .then(update)
    } else {
      update(routeTo(Route.Login))
    }
  }
})
