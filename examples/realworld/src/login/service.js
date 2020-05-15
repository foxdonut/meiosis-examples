import { Route } from "../router"

export const service = state => {
  if (state.route.page === Route.Login) {
    if (!state.login) {
      return { login: {} }
    }
  } else if (state.login) {
    return { login: undefined }
  }
}
