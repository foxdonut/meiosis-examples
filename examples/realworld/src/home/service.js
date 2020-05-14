import { Route } from "../router"
import { identity, when } from "../util/fp"

export const service = state => {
  if (state.route.page === Route.Home) {
    const queryParams = state.route.params.queryParams || {}
    const offset = when(identity, parseInt, queryParams.offset) || 0
    const tag = queryParams.tag
    const feed = queryParams.feed

    if (
      state.previous.offset !== offset ||
      state.previous.tag !== tag ||
      state.previous.feed !== feed
    ) {
      return { loading: true, previous: { offset, tag, feed } }
    }
  }
}
