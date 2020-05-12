import { Route } from "../router"

export const service = state => {
  if (state.route.page === Route.Register && !state.register) {
    return { register: {} }
  }
}
