import { ProfilePage, ProfileFavoritesPage } from "../util/router"

export const accept = (state, patch) => {
  if ((patch.loading === ProfilePage || patch.loading === ProfileFavoritesPage) && state.profile) {
    return null
  }
  return patch
}
