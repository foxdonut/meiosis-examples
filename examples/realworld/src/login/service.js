import { Route } from "../router"

export const service = {
  onchange: state => state.route.page,
  run: cell => {
    if (cell.state.route.page === Route.Login) {
      cell.update({ login: () => ({}) })
    }
  }
}
