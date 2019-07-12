import { articlesApi } from "../services"
import { Route, navigateTo } from "../routes"
import { helpers } from "../root/helpers"

export const Actions = update => ({
  favoriteArticle: (state, slug) => {
    if (state.user) {
      articlesApi
        .favorite(slug)
        .then(() => helpers.loadArticles(state.articlesFilter))
        .then(update)
    } else {
      update(navigateTo(Route.Login()))
    }
  },

  unfavoriteArticle: (state, slug) => {
    if (state.user) {
      articlesApi
        .unfavorite(slug)
        .then(() => helpers.loadArticles(state.articlesFilter))
        .then(update)
    } else {
      update(navigateTo(Route.Login()))
    }
  }
})
