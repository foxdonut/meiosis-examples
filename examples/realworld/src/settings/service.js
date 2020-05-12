import { assoc, defaultTo } from "../util/fp"
import { Route, router } from "../router"

const fields = ["email", "username", "image", "bio"]

export const service = state => {
  if (state.route.page === Route.Settings) {
    if (!state.user) {
      return { route: () => router.getRoute(Route.Home()) }
    }

    if (!state.settings) {
      const settings = fields.reduce(
        (result, field) => assoc(field, defaultTo("", state.user[field]), result),
        {}
      )
      return { settings }
    }
  }
}
