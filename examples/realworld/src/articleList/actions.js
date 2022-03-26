import { articlesApi, loadArticleAndComments, loadArticlesAndTags } from "../services"
import { Route, routeTo } from "../router"
import { getArticlesFilter } from "../util/filter"

const refresh = (state, slug) =>
  state.route.page === Route.ArticleDetail
    ? loadArticleAndComments({ slug })
    : loadArticlesAndTags(getArticlesFilter(state))

export const actions = {
  favoriteArticle: (cell, slug) => {
    if (cell.state.user) {
      articlesApi
        .favorite(slug)
        .then(() => refresh(cell.state, slug))
        .then(cell.update)
    } else {
      cell.update(routeTo(Route.Login))
    }
  },

  unfavoriteArticle: (cell, slug) => {
    if (cell.state.user) {
      articlesApi
        .unfavorite(slug)
        .then(() => refresh(cell.state, slug))
        .then(cell.update)
    } else {
      cell.update(routeTo(Route.Login))
    }
  }
}
