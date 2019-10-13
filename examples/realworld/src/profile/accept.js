import { findRouteSegment } from "meiosis-routing/state"

export const accept = state => {
  if (
    (findRouteSegment(state.route.leave, "Profile") ||
      findRouteSegment(state.route.leave, "ProfileFavorites")) &&
    !(
      findRouteSegment(state.route.arrive, "Profile") ||
      findRouteSegment(state.route.arrive, "ProfileFavorites")
    )
  ) {
    return { profile: null }
  }
}
