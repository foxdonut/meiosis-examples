import { createActions } from "./actions"
import { createView } from "./view"

export const createPager = update => ({
  view: createView(createActions(update))
})
