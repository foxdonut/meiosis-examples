import { Route } from "../router"
import { selectors } from "../selectors"

export const Effect = update => state => {
  if (selectors.page(state) === Route.Register && state.routeChanged) {
    update({ routeChanged: false, register: () => ({}) })
  }
}
