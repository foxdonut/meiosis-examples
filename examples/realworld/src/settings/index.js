import { Actions } from "./actions"
import { Effect } from "./effect"
import { Route } from "../router"

export const settings = {
  Actions,
  RouteChange: {
    [Route.Settings]: Effect
  }
}

export { Settings } from "./view"
