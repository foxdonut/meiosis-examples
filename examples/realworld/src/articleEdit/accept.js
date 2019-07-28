import { findRouteSegment, whenPresent } from "meiosis-routing/state"

export const accept = state => [
  whenPresent(findRouteSegment(state.route.arrive, "ArticleCreate"), () => ({
    article: { title: "", description: "", body: "", tags: "", tagList: [], validationErrors: [] }
  })),

  whenPresent(findRouteSegment(state.route.arrive, "ArticleEdit"), () => ({
    article: { validationErrors: [] }
  }))
]
