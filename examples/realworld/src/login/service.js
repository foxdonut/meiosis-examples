import { Route } from "../router"

export const service = state => {
  if (state.route.page === Route.Login && !state.login) {
    return { login: {} }
  }
}
