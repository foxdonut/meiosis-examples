import { findRouteSegment } from "meiosis-routing/state"

import { articlesApi } from "../services"
import { Route, getArticlesFilter, navigateTo } from "../routes"
import { helpers } from "../root/helpers"

const refresh = (state, slug) =>
  findRouteSegment(state.route.current, "ArticleDetail")
    ? helpers.loadArticle({ slug })
    : helpers.loadArticles(getArticlesFilter(state.route.current))

export const Actions = update => ({
  favoriteArticle: (state, slug) => {
    if (state.user) {
      articlesApi
        .favorite(slug)
        .then(() => refresh(state, slug))
        .then(update)
    } else {
      update(navigateTo(Route.Login()))
    }
  },

  unfavoriteArticle: (state, slug) => {
    if (state.user) {
      articlesApi
        .unfavorite(slug)
        .then(() => refresh(state, slug))
        .then(update)
    } else {
      update(navigateTo(Route.Login()))
    }
  }
})
