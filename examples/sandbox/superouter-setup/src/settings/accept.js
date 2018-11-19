import { HomePage, SettingsPage, navigateTo } from "../util/router"
import { pick } from "../util/fp"

export const accept = (model, patch) => {
  if (patch.pageId === SettingsPage) {
    if (model.user) {
      return Object.assign(patch,
        { settings: pick(["email", "username", "image", "bio"], model.user)})
    }
    else {
      return navigateTo(HomePage)
    }
  }
  return patch
}
