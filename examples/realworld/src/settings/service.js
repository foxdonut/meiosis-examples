import { assoc, defaultTo } from "../util/fp"
import { Route, navigateTo } from "../routes"

const fields = ["email", "username", "image", "bio"]

export const service = ({ state }) => {
  if (state.routeTransition.arrive.Settings) {
    if (!state.user) {
      // FIXME
      return { patch: { route: navigateTo(Route.Home()) } }
    }

    const settings = fields.reduce(
      (result, field) => assoc(field, defaultTo("", state.user[field]), result),
      {}
    )
    return { settings }
  }
}
