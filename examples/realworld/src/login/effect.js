import { Route } from "../router"
import { selectors } from "../selectors"

export const Effect = update => state => {
  if (selectors.page(state) === Route.Login && state.routeChanged) {
    update({ routeChanged: false, login: () => ({}) })
  }
}
