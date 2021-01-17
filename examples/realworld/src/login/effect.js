import { Route } from "../router"

export const Effect = update => state => {
  if (state.route.page === Route.Login) {
    update({ login: () => ({}) })
  }
}
