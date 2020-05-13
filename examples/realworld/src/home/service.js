import { Route } from "../router"
import { get, identity, when } from "../util/fp"

const getOffset = route =>
  when(identity, parseInt, get(route, ["params", "queryParams", "offset"])) || 0

export const service = state => {
  if (state.route.page === Route.Home) {
    const offset = getOffset(state.route)
    const tag = get(state, ["route", "params", "queryParams", "tag"])

    if (state.previous.offset !== offset || state.previous.tag !== tag) {
      return { loading: true, previous: { offset, tag } }
    }
  }
}
