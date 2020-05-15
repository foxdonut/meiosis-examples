import { Route } from "../router"

export const service = state => {
  if (state.route.page === Route.Register) {
    if (!state.register) {
      return { register: {} }
    }
  } else if (state.register) {
    return { register: undefined }
  }
}
