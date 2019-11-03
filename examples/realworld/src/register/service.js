export const service = ({ state }) => {
  if (state.routeTransition.arrive.Register) {
    return { state: { register: {} } }
  }
}
