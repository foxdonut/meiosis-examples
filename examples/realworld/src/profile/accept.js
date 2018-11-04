import { ProfilePage, ProfileFavoritesPage } from "../util/router"

export const accept = (model, patch) => {
  if ((patch.loading === ProfilePage || patch.loading === ProfileFavoritesPage) && model.profile) {
    return null
  }
  return patch
}
