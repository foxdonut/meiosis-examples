export const service = ({ state }) => {
  // Leaving either profile page and not arriving at the other
  if (
    (state.routeTransition.leave.Profile || state.routeTransition.leave.ProfileFavorites) &&
    !(state.routeTransition.arrive.Profile || state.routeTransition.arrive.ProfileFavorites)
  ) {
    return { profile: null }
  }
}
