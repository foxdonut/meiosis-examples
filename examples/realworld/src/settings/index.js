import { createActions } from "./actions"
import { createView } from "./view"

export const createSettings = ({ navigator, update }) => ({
  view: createView({ actions: createActions({ navigator, update }) })
})
