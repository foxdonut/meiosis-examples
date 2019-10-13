import { findRouteSegment } from "meiosis-routing/state"

import { articlesApi, loadArticleAndComments, loadArticlesAndTags } from "../services"
import { Route, getArticlesFilter, navigateTo } from "../routes"

const refresh = (state, slug) =>
  findRouteSegment(state.route.current, "ArticleDetail")
    ? loadArticleAndComments({ slug })
    : loadArticlesAndTags(getArticlesFilter(state.route.current))

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
