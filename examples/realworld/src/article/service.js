import { Route } from "../router"
import { selectors } from "../state"

export const service = state => {
  if (selectors.page(state) === Route.ArticleCreate) {
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
  } else if ([Route.ArticleDetail, Route.ArticleEdit].includes(selectors.page(state))) {
    if (!state.article) {
      return { loading: true }
    }
  } else if (state.article) {
    return { article: undefined }
  }
}
