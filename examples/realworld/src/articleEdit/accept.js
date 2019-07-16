import { findRouteSegment, whenPresent } from "meiosis-routing/state"

export const accept = state => [
  whenPresent(findRouteSegment(state.route.arrive, "ArticleCreate"),
    () => ({ article: { title: "", description: "", body: "", tags: "" } }))
]

