import { actions } from "./actions"
import { view } from "./view"
import { articlesApi } from "../services"

export const ArticleDetail = {
  /*
  navigating: ({ navigate, params }) => {
    articlesApi.getSingle(params.slug).then(update).then(() =>
      articlesApi.getComments(params.slug).then(update).then(navigate))
  },
  */
  actions,
  view
}
