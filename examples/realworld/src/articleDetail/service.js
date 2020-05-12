import { Route } from "../router"

export const service = state => {
  if (state.route.page === Route.ArticleDetail && state.article == null) {
    return { loading: true }
  }
}
