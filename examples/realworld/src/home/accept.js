import { findRouteSegment } from "meiosis-routing/state"

export const accept = state => {
  const arrive = ["Home", "Profile", "ProfileFavorites"]
    .map(id => findRouteSegment(state.route.arrive, id))
    .filter(x => x)[0]

  if (arrive) {
    return {
      articlesFilter: {
        tag: arrive.params.tag,
        feed: arrive.params.feed,
        offset: Number(arrive.params.offset) || 0
      }
    }
  }
}
