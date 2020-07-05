import { Route } from "../router"
import { selectors } from "../state"

export const service = state => {
  if (
    (selectors.page(state) === Route.Profile || selectors.page(state) === Route.ProfileFavorites) &&
    state.routeChanged
  ) {
    return { loading: true }
  }
}
