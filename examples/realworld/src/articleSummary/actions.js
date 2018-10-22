import { articlesApi } from "../services"
import { LoginPage, navigateTo } from "../util/router"
import { services } from "../root/services"

export const actions = update => ({
  favoriteArticle: (model, slug) => {
    if (model.user) {
      articlesApi.favorite(slug)
        .then(() => services.loadArticles(model))
        .then(update)
    }
    else {
      return navigateTo(LoginPage)
    }
  }
})
