export const service = ({ state }) => {
  if (state.routeTransition.arrive.Home) {
    return { loading: true }
  }
}
