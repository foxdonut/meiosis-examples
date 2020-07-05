import { Route } from "../router"
import { selectors } from "../state"

export const service = state => {
  if (selectors.page(state) === Route.Home && state.routeChanged) {
    return { loading: true }
  }
}
