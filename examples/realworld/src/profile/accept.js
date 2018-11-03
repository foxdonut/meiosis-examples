import { ProfilePage } from "../util/router"

export const accept = (model, patch) => {
  if (patch.loading === ProfilePage && model.profile) {
    return null
  }
  return patch
}
