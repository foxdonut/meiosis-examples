import { routeTransition } from "meiosis-routing/state"

export const service = ({ previousState, state }) => ({
  state: { routeTransition: () => routeTransition(previousState.route, state.route) }
})
