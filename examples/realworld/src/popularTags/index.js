import { createActions } from "./actions"
import { createView } from "./view"

export const createPopularTags = ({ update }) => ({
  view: createView({ actions: createActions(update) })
})
