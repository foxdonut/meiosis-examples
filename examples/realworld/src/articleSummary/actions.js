import { articlesApi } from "../services"
import { LoginPage, navigateTo } from "../util/router"
import { helpers } from "../root/helpers"

export const actions = update => ({
  favoriteArticle: (state, slug) => {
    if (state.user) {
      articlesApi
        .favorite(slug)
        .then(() => helpers.loadArticles(state.articlesFilter))
        .then(update)
    } else {
      return navigateTo(LoginPage)
    }
  },

  unfavoriteArticle: (state, slug) => {
    if (state.user) {
      articlesApi
        .unfavorite(slug)
        .then(() => helpers.loadArticles(state.articlesFilter))
        .then(update)
    } else {
      return navigateTo(LoginPage)
    }
  }
})
