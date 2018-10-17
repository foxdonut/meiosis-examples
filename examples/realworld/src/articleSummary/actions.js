import { articlesApi } from "../services"
import { LoginPage } from "../util/constants"

export const actions = ({ update, actions }) => ({
  favoriteArticle: slug => update(model => {
    if (model.user) {
      articlesApi.favorite(slug).then(() => actions.loadArticles())
    }
    else {
      actions.navigateTo(LoginPage)
    }
  })
})
