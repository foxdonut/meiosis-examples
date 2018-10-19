import { HomePage, SettingsPage, navigateTo } from "../util/router"

export const verify = (model, patch) => {
  if (patch.pageId === SettingsPage && !model.user) {
    return navigateTo(HomePage)
  }
  return patch
}
