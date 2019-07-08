import { findRouteSegment } from "meiosis-routing/state"

export const accept = state => {
  if (findRouteSegment(state.route.current, "Login")) {
    return { login: {} }
  }
}

