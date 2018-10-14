import { articlesApi } from "../services"
import { LoginPage } from "../util/constants"

export const actions = ({ actions, getState }) => ({
  favoriteArticle: slug => getState(state => {
    if (state.user) {
      articlesApi.favorite(slug).then(() => actions.loadArticles())
    }
    else {
      actions.navigateTo(LoginPage)
    }
  })
})
