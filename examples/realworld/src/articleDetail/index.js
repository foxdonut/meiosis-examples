import { createActions } from "./actions"
import { createView } from "./view"
import { articlesApi } from "../services"

export const createArticleDetail = ({ navigator, update }) => ({
  navigating: ({ done, params }) => {
    articlesApi.getSingle(params.slug).then(update).then(() =>
      articlesApi.getComments(params.slug).then(update).then(done))
  },
  view: createView({ actions: createActions({ navigator, update }) })
})
