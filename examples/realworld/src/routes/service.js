import { routeTransition } from "meiosis-routing/state"

export const service = ({ previousState, state }) => ({
  routeTransition: () => routeTransition(previousState.route, state.route)
})
