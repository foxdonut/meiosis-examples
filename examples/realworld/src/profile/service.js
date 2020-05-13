import { Route } from "../router"

export const service = state => {
  if (state.route.page === Route.Profile || state.route.page === Route.ProfileFavorites) {
    if (!state.profile) {
      return { loading: true }
    }
  } else if (state.profile) {
    return { profile: undefined }
  }
}
