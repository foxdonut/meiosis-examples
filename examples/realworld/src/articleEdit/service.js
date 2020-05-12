import { Route } from "../router"

export const service = state => {
  if (state.route.page === Route.ArticleCreate) {
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

  if (state.route.page === Route.ArticleEdit) {
    return {
      article: { validationErrors: [] }
    }
  }
}
