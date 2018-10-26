import { SettingsPage } from "../util/router"
import { pick } from "../util/fp"

export const verify = (model, patch) => {
  if (patch.pageId === SettingsPage && model.user) {
    return Object.assign(patch,
      { settings: pick(["email", "username", "image", "bio"], model.user)})
  }
  return patch
}
