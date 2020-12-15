import { assoc, defaultTo } from "../util/fp"
import { Route, routeTo } from "../router"
import { selectors } from "../state"

const fields = ["email", "username", "image", "bio"]

export const Effect = update => state => {
  if (selectors.page(state) === Route.Settings) {
    if (!state.user) {
      update(routeTo(Route.Home))
    } else if (state.routeChanged) {
      const settings = fields.reduce(
        (result, field) => assoc(field, defaultTo("", state.user[field]), result),
        {}
      )
      update({ routeChanged: false, settings })
    }
  }
}
