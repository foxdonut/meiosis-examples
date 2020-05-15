import { Route } from "../router"

export const service = state => {
  if (
    (state.route.page === Route.Profile || state.route.page === Route.ProfileFavorites) &&
    state.routeChanged
  ) {
    return { loading: true }
  }
}
