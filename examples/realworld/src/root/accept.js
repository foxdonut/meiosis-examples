import { HomePage, SettingsPage, navigateTo } from "../util/router"

export const accept = (model, patch) => {
  if (patch.pageId === SettingsPage && !model.user) {
    return navigateTo(HomePage)
  }
  return patch
}
