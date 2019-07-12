import { findRouteSegment } from "meiosis-routing/state"

export const accept = state => {
  if (findRouteSegment(state.route.arrive, "Profile")) {
    return { loading: true }
  }
  /*
  if ((patch.loading === ProfilePage || patch.loading === ProfileFavoritesPage) && state.profile) {
    return null
  }
  return patch
  */
}
