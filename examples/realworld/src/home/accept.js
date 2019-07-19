import { findRouteSegment } from "meiosis-routing/state"

export const accept = state => {
  const arrive = findRouteSegment(state.route.arrive, "Home")

  if (arrive) {
    return { articlesFilter: { tag: arrive.params.tag, feed: arrive.params.feed } }
  }
}
