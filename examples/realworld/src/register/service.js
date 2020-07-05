import { Route } from "../router"
import { selectors } from "../state"

export const service = state => {
  if (selectors.page(state) === Route.Register) {
    if (!state.register) {
      return { register: {} }
    }
  } else if (state.register) {
    return { register: undefined }
  }
}
