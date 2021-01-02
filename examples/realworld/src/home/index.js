import { Effect } from "./effect"
import { Route } from "../router"

export const home = {
  RouteChange: { [Route.Home]: Effect }
}

export { Home } from "./view"
