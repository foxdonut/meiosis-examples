import { Actions } from "./actions"
import { Effect } from "./effect"
import { Route } from "../router"

export const profile = {
  Actions,
  RouteChange: {
    [Route.Profile]: Effect,
    [Route.ProfileFavorites]: Effect
  }
}

export { Profile } from "./view"
