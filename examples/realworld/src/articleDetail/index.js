import { createActions } from "./actions"
import { createView } from "./view"
import { articlesApi } from "../services"

export const createArticleDetail = ({ navigator, update }) => ({
  navigating: ({ navigate, params }) => {
    articlesApi.getSingle(params.slug).then(update).then(() =>
      articlesApi.getComments(params.slug).then(update).then(navigate))
  },
  view: createView({ actions: createActions({ navigator, update }) })
})
