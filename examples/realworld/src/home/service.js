import { Route } from "../router"

export const service = state => {
  if (state.route.page === Route.Home && state.routeChanged) {
    return { loading: true }
  }
}
