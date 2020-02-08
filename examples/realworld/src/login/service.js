export const service = ({ state }) => {
  if (state.routeTransition.arrive.Login) {
    return { login: {} }
  }
}
