import { findRouteSegment } from "meiosis-routing/state"

export const accept = state => {
  if (
    findRouteSegment(state.route.leave, "Profile") ||
    findRouteSegment(state.route.leave, "ProfileFavorites")
  ) {
    return { profile: null }
  }
}
