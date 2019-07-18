import { findRouteSegment } from "meiosis-routing/state"

import { assoc, defaultTo } from "../util/fp"
import { Route, navigateTo } from "../routes"

const fields = ["email", "username", "image", "bio"]

export const guard = state => {
  if (findRouteSegment(state.route.current, "Settings") && !state.user) {
    return navigateTo(Route.Home())
  }
}

export const accept = state => {
  if (findRouteSegment(state.route.arrive, "Settings")) {
    const settings = fields.reduce(
      (result, field) => assoc(field, defaultTo("", state.user[field]), result),
      {}
    )
    return { settings }
  }
}
