import { Route } from "../router"
import { loadArticleAndComments } from "../services"

export const Effect = update => state => {
  if (state.route.page === Route.ArticleDetail && state.loading) {
    const { slug } = state.route.params
    loadArticleAndComments({ slug }).then(data => update([data, { loading: false }]))
  }
}
