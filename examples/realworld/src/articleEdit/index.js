import { createActions } from "./actions"
import { createView } from "./view"

export const createArticleEdit = ({ navigator, update }) => ({
  view: createView({ actions: createActions({ navigator, update }) })
})
