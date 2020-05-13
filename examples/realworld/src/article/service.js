import { Route } from "../router"

export const service = state => {
  if (state.route.page === Route.ArticleCreate) {
    if (!state.article) {
      return {
        article: {
          title: "",
          description: "",
          body: "",
          tags: "",
          tagList: [],
          validationErrors: []
        }
      }
    }
  } else if ([Route.ArticleDetail, Route.ArticleEdit].includes(state.route.page)) {
    if (!state.article) {
      return { loading: true }
    }
  } else if (state.article) {
    return { article: undefined }
  }
}
