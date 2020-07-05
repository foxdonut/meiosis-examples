import { Route } from "../router"
import { selectors } from "../state"

export const service = state => {
  if (selectors.page(state) === Route.Login) {
    if (!state.login) {
      return { login: {} }
    }
  } else if (state.login) {
    return { login: undefined }
  }
}
