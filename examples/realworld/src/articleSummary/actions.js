import { articlesApi } from "../services"
import { LoginPage, navigateTo } from "../util/router"

export const actions = ({ update, actions }) => ({
  favoriteArticle: slug => update(model => {
    if (model.user) {
      articlesApi.favorite(slug).then(() => actions.loadArticles())
    }
    else {
      return navigateTo(LoginPage)
    }
  })
})
