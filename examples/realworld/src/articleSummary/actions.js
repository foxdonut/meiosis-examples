import { articlesApi } from "../services"
import { LoginPage, navigateTo } from "../util/router"
import { helpers } from "../root/helpers"

export const actions = update => ({
  favoriteArticle: (model, slug) => {
    if (model.user) {
      articlesApi.favorite(slug)
        .then(() => helpers.loadArticles(model))
        .then(update)
    }
    else {
      return navigateTo(LoginPage)
    }
  }
})
