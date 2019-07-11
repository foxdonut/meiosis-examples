import { findRouteSegment } from "meiosis-routing/state"

import { assoc, defaultTo } from "../util/fp"
import { Route, navigateTo } from "../routes"

const fields = ["email", "username", "image", "bio"]

export const accept = state => {
  if (findRouteSegment(state.route.current, "Settings")) {
    if (state.user) {
      const settings = fields.reduce(
        (result, field) => assoc(field, defaultTo("", state.user[field]), result), {})
      return { settings }
    } else {
      return navigateTo(Route.Home())
    }
  }
}

